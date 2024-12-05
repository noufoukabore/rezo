import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',  // Cela rend le service disponible globalement dans l'application
})
export class StatistiqueService {

  constructor() { }

  getStatistiques() {
    // Logique pour récupérer les statistiques ou interagir avec une API
    return {
      totalPointsDeVente: 100,
      totalCommerciaux: 50,
      commandesEnAttente: 10,
      visitesRealisees: 25,
    };
  }
}
