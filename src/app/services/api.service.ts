import { HttpClient } from '@angular/common/http';  // Importer HttpClient pour faire des requêtes
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',  // Le service sera disponible dans toute l'application
})
export class ApiService {
  private apiUrl = 'http://localhost:3000';  // L'URL de votre API Node.js

  constructor(private http: HttpClient) { }

  // Méthode pour récupérer la liste des utilisateurs depuis le serveur
  getUsers() {
    return this.http.get(`${this.apiUrl}/users`);
  }

  // Méthode pour ajouter un nouvel utilisateur
  addUser(user: { name: string; email: string }) {
    return this.http.post(`${this.apiUrl}/adduser`, user);
  }
}
