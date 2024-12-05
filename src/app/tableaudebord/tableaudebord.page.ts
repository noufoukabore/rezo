import { Component, OnInit } from '@angular/core';
import { StatistiqueService } from '../services/statistique.service';

@Component({
  selector: 'app-tableaudebord',
  templateUrl: './tableaudebord.page.html',
  styleUrls: ['./tableaudebord.page.scss'],
})
export class TableaudebordPage implements OnInit {

  totalPointsDeVente: number = 0;
  totalCommerciaux: number = 0;
  commandesEnAttente: number = 0;
  visitesRealisees: number = 0;

  constructor(private statistiqueService: StatistiqueService) { }

  ngOnInit() {
    this.loadStatistiques();
  }

  loadStatistiques() {
    const data = this.statistiqueService.getStatistiques();
    this.totalPointsDeVente = data.totalPointsDeVente;
    this.totalCommerciaux = data.totalCommerciaux;
    this.commandesEnAttente = data.commandesEnAttente;
    this.visitesRealisees = data.visitesRealisees;
  }
}
