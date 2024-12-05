import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.page.html',
  styleUrls: ['./photo.page.scss'],
})
export class PhotoPage {
  photos: { url: string; date: Date }[] = []; // Liste des photos

  constructor(private alertController: AlertController) { }

  // Méthode pour télécharger (uploader) une photo
  uploaderPhoto(event: any) {
    const file = event.target.files[0]; // Récupérer le fichier sélectionné
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.photos.push({
          url: reader.result as string,
          date: new Date(),
        });
      };
      reader.readAsDataURL(file); // Lire le fichier comme base64
    }
  }

  // Méthode pour supprimer une photo
  async supprimerPhoto(photo: { url: string; date: Date }) {
    const alert = await this.alertController.create({
      header: 'Confirmer',
      message: 'Voulez-vous vraiment supprimer cette photo ?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
        },
        {
          text: 'Supprimer',
          handler: () => {
            this.photos = this.photos.filter((p) => p !== photo); // Supprimer la photo
          },
        },
      ],
    });
    await alert.present();
  }
}
