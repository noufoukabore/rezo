// produit.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private apiUrl = 'http://localhost:3000/api/produits'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  // Récupérer tous les produits
  getProduits(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Ajouter un produit
  ajouterProduit(nom: string, prix: number): Observable<any> {
    return this.http.post<any>(this.apiUrl, { nom, prix });
  }
}
