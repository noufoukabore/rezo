import { Component } from '@angular/core';
import { AlertController, ActionSheetController } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-superviseur',
  templateUrl: './superviseur.page.html',
  styleUrls: ['./superviseur.page.scss'],
})
export class SuperviseurPage {
  superviseur = {
    id: 1,
    nom: 'Paul Martin',
    photo: 'assets/superviseur-photo.png',
    commerciaux: [
      { id: 1, nom: 'Jean Dupont', performance: 75 },
      { id: 2, nom: 'Marie Curie', performance: 85 },
    ],
  };

  nouvelObjectif = {
    description: '',
  };

  objectifs = [
    { description: 'Atteindre 100 ventes', nomCommercial: 'Jean Dupont' },
    { description: 'Améliorer la satisfaction client', nomCommercial: 'Marie Curie' },
  ];

  performances = [
    { nomCommercial: 'Jean Dupont', ventes: 80, objectif: 100, progress: 0.8 },
    { nomCommercial: 'Marie Curie', ventes: 90, objectif: 100, progress: 0.9 },
  ];

  currentTab: string = 'commerciaux';

  constructor(private alertCtrl: AlertController, private actionSheetController: ActionSheetController) { }

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
    this.superviseur.photo = photo.webPath!;
  }

  // Fonction pour choisir une photo depuis la galerie
  async selectFromGallery() {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos,
      quality: 100,
    });
    this.superviseur.photo = photo.webPath!; // Correction ici, on remplace `this..photo` par `this.superviseur.photo`
  }

  validerVisite(commercial: any) {
    console.log('Valider la visite pour :', commercial.nom);
  }

  afficherImageProfil() {
    console.log('Profil cliqué');
    alert('Affichage de l\'image de profil du superviseur !');
  }
  definirObjectif() {
    if (this.nouvelObjectif.description) {
      this.objectifs.push({
        description: this.nouvelObjectif.description,
        nomCommercial: 'Jean Dupont', // Exemple pour assigner à Jean Dupont
      });

      this.alertCtrl.create({
        header: 'Objectif ajouté',
        message: `L'objectif "${this.nouvelObjectif.description}" a été ajouté.`,
        buttons: ['OK'],
      }).then(alert => alert.present());

      this.nouvelObjectif.description = ''; // Réinitialiser le champ de l'objectif
    }
  }
}
