import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Commande {
  id: number;
  produitId: string;
  quantite: number;
  dateCommande: string;
  dateLivraison: string;
  statut: string;
}

@Injectable({
  providedIn: 'root',
})
export class CommandeService {
  // Remplacez par l'URL de votre API backend
  private apiUrl = 'https://api.example.com/commandes';

  constructor(private http: HttpClient) { }

  /**
   * Récupérer toutes les commandes
   * @returns Observable contenant la liste des commandes
   */
  getAllCommandes(): Observable<Commande[]> {
    return this.http.get<Commande[]>(this.apiUrl);
  }

  /**
   * Récupérer une commande spécifique par ID
   * @param id Identifiant de la commande
   * @returns Observable contenant les détails de la commande
   */
  getCommandeById(id: number): Observable<Commande> {
    if (!id || id <= 0) {
      throw new Error('L\'ID de la commande doit être un entier valide.');
    }
    return this.http.get<Commande>(`${this.apiUrl}/${id}`);
  }

  /**
   * Créer une nouvelle commande
   * @param data Données de la commande à créer
   * @returns Observable contenant les détails de la commande créée
   */
  createCommande(data: { produitId: string; quantite: number; dateLivraison: string }): Observable<Commande> {
    if (!data.produitId || data.quantite <= 0 || !data.dateLivraison) {
      throw new Error('Les données de la commande sont invalides.');
    }
    return this.http.post<Commande>(this.apiUrl, data);
  }

  /**
   * Annuler une commande (changer son statut ou la supprimer)
   * @param id Identifiant de la commande à annuler
   * @returns Observable de type void
   */
  cancelCommande(id: number): Observable<void> {
    if (!id || id <= 0) {
      throw new Error('L\'ID de la commande doit être un entier valide.');
    }
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
