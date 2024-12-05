import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  private apiUrl = 'https://votre-api.com/api/produits'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  // Obtenir tous les produits disponibles
  getProduits(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Obtenir un produit spécifique par ID (optionnel, si nécessaire)
  getProduitById(produitId: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${produitId}`);
  }

  // Ajouter un nouveau produit (optionnel, si nécessaire)
  addProduit(produit: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, produit);
  }

  // Mettre à jour un produit existant (optionnel, si nécessaire)
  updateProduit(produitId: string, produit: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${produitId}`, produit);
  }

  // Supprimer un produit (optionnel, si nécessaire)
  deleteProduit(produitId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${produitId}`);
  }
}
