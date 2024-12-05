import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';  // Assurez-vous que 'chart.js' est installé
import { StatisticsService } from '../services/statistics.service';  // Service pour gérer les statistiques

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.page.html',
  styleUrls: ['./statistiques.page.scss'],
})
export class StatistiquesPage implements OnInit {

  public isLoading: boolean = false;
  public visitesChart: any;
  public ventesChart: any;

  constructor(private statisticsService: StatisticsService) { }

  ngOnInit() {
    this.actualiserStatistiques();
  }

  // Fonction pour actualiser les statistiques
  actualiserStatistiques() {
    this.isLoading = true;
    this.statisticsService.getStatistiques().subscribe((data) => {
      this.isLoading = false;
      this.initCharts(data);  // Initialiser les graphiques avec les données
    }, error => {
      this.isLoading = false;
      console.error('Erreur lors de la récupération des statistiques', error);
    });
  }

  // Initialiser les graphiques avec les données
  initCharts(data: any) {
    // Graphique des visites
    this.visitesChart = new Chart('visitesChart', {
      type: 'line',  // Choisissez le type de graphique (ligne, barre, etc.)
      data: {
        labels: data.visites.labels,  // Labels des visites (dates, mois, etc.)
        datasets: [{
          label: 'Nombre de Visites',
          data: data.visites.data,  // Données des visites
          borderColor: '#00f',  // Couleur de la ligne
          fill: false
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            beginAtZero: true
          },
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // Graphique des ventes
    this.ventesChart = new Chart('ventesChart', {
      type: 'bar',  // Choisissez un graphique en barres pour les ventes
      data: {
        labels: data.ventes.labels,  // Labels des ventes
        datasets: [{
          label: 'Ventes Totales',
          data: data.ventes.data,  // Données des ventes
          backgroundColor: '#4caf50',  // Couleur des barres
          borderColor: '#4caf50',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            beginAtZero: true
          },
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

  // Fonction pour générer un rapport
  genererRapport() {
    this.statisticsService.generateReport().subscribe((reportData) => {
      // Traitez ici les données du rapport généré
      console.log('Rapport généré:', reportData);
      // Vous pouvez ici afficher ou enregistrer le rapport sous forme de fichier (PDF, CSV, etc.)
    }, error => {
      console.error('Erreur lors de la génération du rapport', error);
    });
  }
}
