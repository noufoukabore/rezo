import { Component, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Geolocation } from '@capacitor/geolocation';
import * as L from 'leaflet';
import { Router } from '@angular/router'; // Importer le Router pour la navigation

@Component({
  selector: 'app-pointdevente',
  templateUrl: './pointdevente.page.html',
  styleUrls: ['./pointdevente.page.scss'],
})
export class PointDeVentePage implements AfterViewInit {
  pointsDeVente: Array<any> = []; // Liste des points de vente
  pointDeVenteForm: FormGroup;
  isModalOpen = false;
  isEditing = false;
  map: L.Map | undefined;
  latitude: number = 0;
  longitude: number = 0;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.pointDeVenteForm = this.formBuilder.group({
      nom: ['', Validators.required],
      adresse: ['', Validators.required],
      typeProduit: ['', Validators.required],
      geolocalisation: ['', Validators.required], // Doit être requis
      document: [''], // Pour stocker le document uploadé
    });
  }

  ngAfterViewInit() {
    this.loadMap();
  }

  // Charger la carte avec Leaflet
  loadMap() {
    if (!this.map) { // Vérification pour éviter de recharger la carte
      this.map = L.map('map').setView([0, 0], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
      }).addTo(this.map);
    }
  }

  // Obtenir la géolocalisation actuelle
  async getCurrentLocation() {
    try {
      const position = await Geolocation.getCurrentPosition();
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;

      // Centrer la carte sur la position
      if (this.map) {
        this.map.setView([this.latitude, this.longitude], 13);
        const marker = L.marker([this.latitude, this.longitude]).addTo(this.map);
        marker.bindPopup(`<b>Point de Vente</b><br>Latitude: ${this.latitude}, Longitude: ${this.longitude}`).openPopup();
      }

      // Mettre à jour la valeur dans le formulaire
      this.pointDeVenteForm.controls['geolocalisation'].setValue(`${this.latitude}, ${this.longitude}`);
    } catch (error) {
      console.error('Erreur de géolocalisation:', error);
    }
  }

  openAddForm() {
    this.isEditing = false;
    this.isModalOpen = true;
    this.pointDeVenteForm.reset();
  }

  openEditForm(point: { id: number; nom: string; adresse: string; typeProduit: string; geolocalisation: string; document: string }) {
    this.isEditing = true;
    this.isModalOpen = true;
    this.pointDeVenteForm.patchValue(point);
  }

  closeModal() {
    this.isModalOpen = false;
  }

  submitForm() {
    if (this.pointDeVenteForm.valid) {
      const newPoint = {
        id: this.isEditing ? this.pointDeVenteForm.value.id : this.pointsDeVente.length + 1, // Id généré automatiquement
        ...this.pointDeVenteForm.value
      };

      if (this.isEditing) {
        // Logique pour modifier un point de vente existant
        const index = this.pointsDeVente.findIndex(p => p.id === newPoint.id);
        if (index > -1) {
          this.pointsDeVente[index] = newPoint;
        }
      } else {
        // Ajouter un nouveau point de vente
        this.pointsDeVente.push(newPoint);
      }

      this.closeModal();
    }
  }

  deletePoint(id: number) {
    this.pointsDeVente = this.pointsDeVente.filter(point => point.id !== id);
  }

  // Méthode pour naviguer vers la page Stock
  consultStock(point: any) {
    this.router.navigate(['/stock'], {
      queryParams: { pointId: point.id }, // Passez l'id du point de vente
    });
  }

  // Méthode pour naviguer vers la page Commande
  placeOrder(point: any) {
    this.router.navigate(['/commande'], {
      queryParams: { pointId: point.id }, // Passez l'id du point de vente
    });
  }

  uploadDocument(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      // Logique pour uploader le fichier (vous pouvez ajouter une logique pour stocker le document ici)
      this.pointDeVenteForm.controls['document'].setValue(file.name); // Exemple de stockage du nom du fichier
    }
  }
}
