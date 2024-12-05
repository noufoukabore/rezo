import { Component, OnInit } from '@angular/core';

interface Objective {
  id: number;
  description: string;
  dateDebut: Date;
  dateFin: Date;
}

@Component({
  selector: 'app-objectif',
  templateUrl: './objectif.page.html',
  styleUrls: ['./objectif.page.scss'],
})
export class ObjectifPage implements OnInit {
  objectifs: Objective[] = []; // Liste des objectifs existants
  nouvelObjectif: Partial<Objective> = {}; // Données pour créer un nouvel objectif

  constructor() { }

  ngOnInit() {
    this.loadObjectifs();
  }

  // Méthode pour charger les objectifs existants
  loadObjectifs() {
    // Exemple de données simulées
    this.objectifs = [
      { id: 1, description: 'Augmenter les ventes', dateDebut: new Date('2024-01-01'), dateFin: new Date('2024-12-31') },
      { id: 2, description: 'Atteindre 500 nouveaux clients', dateDebut: new Date('2024-06-01'), dateFin: new Date('2024-12-31') },
    ];
  }

  // Méthode pour créer un objectif
  creerObjectif() {
    if (this.nouvelObjectif.description && this.nouvelObjectif.dateDebut && this.nouvelObjectif.dateFin) {
      const nouvelId = this.objectifs.length > 0 ? this.objectifs[this.objectifs.length - 1].id + 1 : 1;

      const objectif: Objective = {
        id: nouvelId,
        description: this.nouvelObjectif.description as string,
        dateDebut: new Date(this.nouvelObjectif.dateDebut as Date),
        dateFin: new Date(this.nouvelObjectif.dateFin as Date),
      };

      this.objectifs.push(objectif);
      this.nouvelObjectif = {}; // Réinitialiser le formulaire après ajout
    } else {
      alert('Tous les champs doivent être remplis.'); // Utilisation d'une alerte pour une meilleure expérience utilisateur
    }
  }

  // Méthode pour supprimer un objectif
  supprimerObjectif(objectif: Objective) {
    this.objectifs = this.objectifs.filter(o => o.id !== objectif.id);
    console.log(`Objectif "${objectif.description}" supprimé.`);
  }
}
