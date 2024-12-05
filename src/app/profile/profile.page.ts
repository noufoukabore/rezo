import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  defaultPhoto = 'https://via.placeholder.com/150'; // Photo par défaut
  user = {
    name: '',
    about: '',
    photo: '', // Photo de profil
  };
  users = [
    { id: 1, name: 'Utilisateur 1', role: 'Admin' },
    { id: 2, name: 'Utilisateur 2', role: 'Commercial' },
  ];
  pendingRequests = [
    { id: 1, name: 'Point de Vente A', submittedBy: 'Commercial 1' },
    { id: 2, name: 'Point de Vente B', submittedBy: 'Commercial 2' },
  ];

  constructor(
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) { }

  /**
   * Fonction pour changer la photo de profil.
   */
  async changePhoto() {
    const alert = await this.alertCtrl.create({
      header: 'Modifier la photo',
      buttons: [
        {
          text: 'Prendre une photo',
          handler: () => this.takePhoto(CameraSource.Camera),
        },
        {
          text: 'Choisir dans la galerie',
          handler: () => this.takePhoto(CameraSource.Photos),
        },
        {
          text: 'Annuler',
          role: 'cancel',
        },
      ],
    });
    await alert.present();
  }

  /**
   * Prendre une photo ou choisir depuis la galerie.
   * @param source La source de la photo (Camera ou Photos).
   */
  async takePhoto(source: CameraSource) {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source,
      });

      if (image.dataUrl) {
        this.user.photo = image.dataUrl;
        this.showToast('Photo mise à jour avec succès.');
      }
    } catch (error) {
      this.showToast('Erreur lors de la mise à jour de la photo.');
    }
  }

  /**
   * Afficher un toast pour notifier l'utilisateur.
   * @param message Le message à afficher.
   */
  async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      position: 'bottom',
    });
    await toast.present();
  }

  /**
   * Ouvrir un modal pour ajouter un utilisateur.
   */
  openAddUserModal() {
    console.log('Ajouter un utilisateur');
  }

  /**
   * Supprimer un utilisateur.
   * @param userId ID de l'utilisateur à supprimer.
   */
  deleteUser(userId: number) {
    console.log(`Utilisateur ${userId} supprimé`);
  }

  /**
   * Approuver un point de vente.
   * @param requestId ID de la demande de point de vente.
   */
  approvePointOfSale(requestId: number) {
    console.log(`Point de vente ${requestId} approuvé`);
  }

  /**
   * Rejeter un point de vente.
   * @param requestId ID de la demande de point de vente.
   */
  rejectPointOfSale(requestId: number) {
    console.log(`Point de vente ${requestId} rejeté`);
  }
}
