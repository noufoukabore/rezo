import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ActionSheetController } from '@ionic/angular';
import { Router } from '@angular/router';  // Import du Router

@Component({
  selector: 'app-commercial',
  templateUrl: 'commercial.page.html',
  styleUrls: ['commercial.page.scss'],
})
export class CommercialPage {
  commercial = {
    nom: 'John Doe',
    email: 'john.doe@example.com',
    portefeuille: ['Point de Vente 1', 'Point de Vente 2'],
    objectifs: 'Atteindre 100 points de vente',
    photo: 'assets/profile-placeholder.png', // Image par défaut
  };

  // Variable pour contrôler l'ouverture de la modal
  isModalOpen = false;

  constructor(private actionSheetController: ActionSheetController, private router: Router) { }

  // Méthode pour ouvrir la modal et afficher l'image
  openModal() {
    this.isModalOpen = true;
  }

  // Méthode pour fermer la modal
  closeModal() {
    this.isModalOpen = false;
  }

  // Fonction pour changer la photo de profil
  async changePhoto() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Modifier la photo de profil',
      buttons: [
        {
          text: 'Prendre une photo',
          handler: () => {
            this.takePhoto();
          },
        },
        {
          text: 'Choisir depuis la galerie',
          handler: () => {
            this.selectFromGallery();
          },
        },
        {
          text: 'Annuler',
          role: 'cancel',
        },
      ],
    });
    await actionSheet.present();
  }

  // Fonction pour prendre une photo avec la caméra
  async takePhoto() {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100,
    });
    this.commercial.photo = photo.webPath!;
  }

  // Fonction pour choisir une photo depuis la galerie
  async selectFromGallery() {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos,
      quality: 100,
    });
    this.commercial.photo = photo.webPath!;
  }

  // Méthodes pour gérer les actions de l'utilisateur
  prospecterPointDeVente() {
    this.router.navigateByUrl('pointdevente');
  }

  planifierVisite() {
    this.router.navigateByUrl('visite');
  }

  suivreObjectifs() {
    this.router.navigateByUrl('objectif');
  }

  validerVisites() {
    console.log('Valider les visites');
  }
}
