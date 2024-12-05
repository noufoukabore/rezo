import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-administrateur',
  templateUrl: './administrateur.page.html',
  styleUrls: ['./administrateur.page.scss'],
})
export class AdministrateurPage {
  admin = {
    id: 'ADM123',
    nom: 'Admin Principal',
    photo: 'assets/avatar-placeholder.png',
  };

  utilisateurs = [
    { id: 'USR1', nom: 'NABALOUM Basile', role: 'commercial' },
    { id: 'USR2', nom: 'Zongo Alfa', role: 'superviseur' },
  ];

  pointsDeVenteEnAttente = [
    { id: 'PDV1', nom: 'Boutique A', adresse: '123 Rue Principale' },
    { id: 'PDV2', nom: 'Magasin B', adresse: '456 Avenue Centrale' },
  ];

  nouvelUtilisateur = {
    id: '',
    nom: '',
    prenom: '',
    email: '',
    role: '',
  };

  // Modifier la photo de profil
  async modifierPhoto() {
    try {
      const image = await Camera.getPhoto({
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Photos,
        quality: 90,
      });

      if (image.dataUrl) {
        this.admin.photo = image.dataUrl;
        console.log('Photo de profil mise à jour.');
      }
    } catch (error) {
      console.error('Erreur lors de la sélection de la photo :', error);
    }
  }

  // Sauvegarder les modifications de l'admin
  sauvegarder() {
    console.log('Sauvegarder les modifications de profil :', this.admin);
  }

  // Ajouter un nouvel utilisateur
  ajouterUtilisateur() {
    if (
      this.nouvelUtilisateur.nom &&
      this.nouvelUtilisateur.prenom &&
      this.nouvelUtilisateur.email &&
      this.nouvelUtilisateur.role
    ) {
      this.utilisateurs.push({ ...this.nouvelUtilisateur, id: `USR${this.utilisateurs.length + 1}` });
      console.log('Utilisateur ajouté :', this.nouvelUtilisateur);
      this.nouvelUtilisateur = { id: '', nom: '', prenom: '', email: '', role: '' };
    } else {
      console.error('Tous les champs sont requis pour ajouter un utilisateur.');
    }
  }

  // Modifier un compte utilisateur
  modifierCompte(utilisateur: any) {
    console.log('Modifier le compte de :', utilisateur);
  }

  // Supprimer un compte utilisateur
  supprimerCompte(id: string) {
    this.utilisateurs = this.utilisateurs.filter(user => user.id !== id);
    console.log('Compte supprimé, ID :', id);
  }

  // Approuver un point de vente en attente
  approuverPointDeVente(id: string) {
    const point = this.pointsDeVenteEnAttente.find(p => p.id === id);
    if (point) {
      console.log('Point de vente approuvé :', point);
      this.pointsDeVenteEnAttente = this.pointsDeVenteEnAttente.filter(p => p.id !== id);
    }
  }

  // Rejeter un point de vente en attente
  rejectPointOfSale(id: string) {
    const point = this.pointsDeVenteEnAttente.find(p => p.id === id);
    if (point) {
      console.log('Point de vente rejeté :', point);
      this.pointsDeVenteEnAttente = this.pointsDeVenteEnAttente.filter(p => p.id !== id);
    }
  }
}
