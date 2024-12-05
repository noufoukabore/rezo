import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private storage: Storage) {
    this.storage.create(); // Crée la base de données de stockage local
  }

  // Fonction pour sauvegarder l'utilisateur dans le stockage local
  async sauvegarderUtilisateur(utilisateur: any): Promise<void> {
    try {
      const id = utilisateur.id || new Date().getTime().toString(); // Crée un ID unique si non existant
      await this.storage.set(id, utilisateur); // Sauvegarde l'utilisateur avec son ID
    } catch (error) {
      throw new Error('Erreur de sauvegarde de l\'utilisateur : ' + error);
    }
  }
}
