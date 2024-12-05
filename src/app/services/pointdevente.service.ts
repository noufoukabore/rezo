import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PointDeVenteService {

  private apiUrl = 'https://example.com/api/pointsDeVente'; // URL de l'API pour les points de vente

  constructor(private http: HttpClient) { }

  // Récupérer tous les points de vente
  getPointsDeVente(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Ajouter un nouveau point de vente
  addPointDeVente(pointDeVente: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, pointDeVente);
  }

  // Mettre à jour un point de vente existant
  updatePointDeVente(pointDeVente: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${pointDeVente.id}`, pointDeVente);
  }

  // Supprimer un point de vente
  deletePointDeVente(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  // Télécharger un document pour un point de vente
  uploadDocument(file: File): Observable<any> {
    const formData = new FormData();
    formData.append('file', file, file.name);
    return this.http.post<any>(`${this.apiUrl}/uploadDocument`, formData);
  }

  // Optionnel : Récupérer un point de vente par son ID
  getPointDeVenteById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
