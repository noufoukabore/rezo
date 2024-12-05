import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private baseUrl = 'https://api.example.com/commandes'; // URL de l'API pour les commandes


  constructor(private http: HttpClient) { }

  // Récupérer toutes les commandes
  getAllCommandes(): Observable<any> {
    return this.http.get(`${this.baseUrl}`).pipe(
      catchError(this.handleError)
    );
  }

  // Récupérer une commande par ID
  getCommandeById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // Valider une commande
  validerCommande(id: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/${id}/valider`, {}).pipe(
      catchError(this.handleError)
    );
  }

  // Suivre une commande
  suivreCommande(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}/suivi`).pipe(
      catchError(this.handleError)
    );
  }

  // Annuler une commande
  annulerCommande(id: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/${id}/annuler`, {}).pipe(
      catchError(this.handleError)
    );
  }

  // Créer une nouvelle commande
  creerCommande(commande: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, commande).pipe(
      catchError(this.handleError)
    );
  }

  // Gestion des erreurs
  private handleError(error: any) {
    console.error('Une erreur est survenue', error);
    return throwError(error);
  }
}
