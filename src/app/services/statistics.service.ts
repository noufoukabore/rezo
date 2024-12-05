import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  private apiUrl = 'https://api.example.com/statistics';  // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) { }

  // Récupérer les statistiques (visites, ventes)
  getStatistiques(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/get-statistics`);
  }

  // Générer un rapport basé sur les statistiques
  generateReport(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/generate-report`);
  }
}
