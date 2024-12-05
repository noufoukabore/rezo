import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VisiteService {

  private apiUrl = 'https://api.example.com/visites'; // Remplacez par votre URL d'API

  constructor(private http: HttpClient) { }

  // Récupérer la liste des visites
  getVisites(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Planifier une nouvelle visite
  planifierVisite(visiteForm: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/planifier`, visiteForm);
  }

  // Enregistrer un commentaire
  enregistrerCommentaire(visiteId: number, commentaire: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${visiteId}/commentaire`, { commentaire });
  }

  // Demander l'approbation de la création d'un point de vente
  demanderApprobation(visiteId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${visiteId}/demander-approbation`, {});
  }

  // Demander la validation d'une visite
  demanderValidation(visiteId: number): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${visiteId}/demander-validation`, {});
  }
}
