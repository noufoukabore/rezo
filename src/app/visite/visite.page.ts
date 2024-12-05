import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { VisiteService } from '../services/visite.service';

@Component({
  selector: 'app-visite',
  templateUrl: './visite.page.html',
  styleUrls: ['./visite.page.scss'],
})
export class VisitePage implements OnInit {
  visiteForm = {
    idPointDeVente: null,
    nomPointDeVente: '',
    dateVisite: '',
    statut: '',
  };

  visites: any[] = []; // Liste des visites
  visiteEnCours: any = null; // Visite en cours pour les actions spécifiques

  constructor(
    private visiteService: VisiteService,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.loadVisites();
  }

  // Charger la liste des visites
  loadVisites() {
    this.visiteService.getVisites().subscribe((data) => {
      this.visites = data;
    });
  }

  // Planifier une nouvelle visite
  planifierVisite() {
    this.visiteService.planifierVisite(this.visiteForm).subscribe((response) => {
      if (response.success) {
        this.visiteForm = {
          idPointDeVente: null,
          nomPointDeVente: '',
          dateVisite: '',
          statut: '',
        };
        this.loadVisites();
      }
    });
  }

  // Enregistrer un commentaire pour une visite
  enregistrerCommentaire(visiteId: number, commentaire: string) {
    this.visiteService.enregistrerCommentaire(visiteId, commentaire).subscribe((response) => {
      if (response.success) {
        this.loadVisites();
      }
    });
  }

  // Demander une approbation de création de point de vente
  demanderApprobation(visiteId: number) {
    this.visiteService.demanderApprobation(visiteId).subscribe((response) => {
      if (response.success) {
        alert("Demande d'approbation envoyée.");
      }
    });
  }

  // Demander une validation de la visite
  demanderValidation(visiteId: number) {
    this.visiteService.demanderValidation(visiteId).subscribe((response) => {
      if (response.success) {
        alert("Demande de validation envoyée.");
      }
    });
  }

  // Naviguer vers la page de scan QR code
  scanQRCode() {
    this.navCtrl.navigateForward('/qrcode');
  }
}
