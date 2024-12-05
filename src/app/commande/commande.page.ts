import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.page.html',
  styleUrls: ['./commande.page.scss'],
})
export class CommandePage implements OnInit {
  commandes = [
    {
      id: 1,
      dateCommande: new Date(),
      statut: 'En cours',
    },
    {
      id: 2,
      dateCommande: new Date(),
      statut: 'Livrée',
    },
  ];

  produits = [
    { id: 1, nom: 'Produit A' },
    { id: 2, nom: 'Produit B' },
    { id: 3, nom: 'Produit C' },
  ];

  nouvelleCommande = {
    produit: null,
    quantite: null,
    dateLivraison: null,
  };

  constructor(
    private alertController: AlertController,
    private toastController: ToastController
  ) { }

  ngOnInit() { }

  async suivreCommande(id: number) {
    const commande = this.commandes.find((cmd) => cmd.id === id);
    if (commande) {
      const alert = await this.alertController.create({
        header: 'Suivi de Commande',
        message: `La commande #${id} est actuellement au statut : <strong>${commande.statut}</strong>.`,
        buttons: ['OK'],
      });
      await alert.present();
    }
  }

  async annulerCommande(id: number) {
    const alert = await this.alertController.create({
      header: 'Confirmation',
      message: `Êtes-vous sûr de vouloir annuler la commande #${id} ?`,
      buttons: [
        {
          text: 'Non',
          role: 'cancel',
        },
        {
          text: 'Oui',
          handler: () => {
            this.commandes = this.commandes.filter((cmd) => cmd.id !== id);
            this.showToast('Commande annulée avec succès.');
          },
        },
      ],
    });
    await alert.present();
  }

  async passerCommande() {
    if (
      !this.nouvelleCommande.produit ||
      !this.nouvelleCommande.quantite ||
      !this.nouvelleCommande.dateLivraison
    ) {
      this.showToast('Veuillez remplir tous les champs pour passer une commande.');
      return;
    }

    const newId = this.commandes.length + 1;
    const nouvelleCommandeObj = {
      id: newId,
      dateCommande: new Date(),
      statut: 'En cours',
      ...this.nouvelleCommande,
    };

    this.commandes.push(nouvelleCommandeObj);
    this.resetNouvelleCommande();
    this.showToast('Commande passée avec succès.');
  }

  private resetNouvelleCommande() {
    this.nouvelleCommande = {
      produit: null,
      quantite: null,
      dateLivraison: null,
    };
  }

  private async showToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color: 'success',
    });
    toast.present();
  }
}
