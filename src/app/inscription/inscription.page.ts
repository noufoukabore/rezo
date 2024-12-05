import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {

  // Définir les propriétés utilisées dans le template
  nom: string = '';         // Nom
  prenom: string = '';      // Prénom
  telephone: string = '';   // Numéro de téléphone
  email: string = '';       // Email
  password: string = '';    // Mot de passe
  role: string = ''; // Variable pour le rôle sélectionné
  showPassword: boolean = false; // Visibilité du mot de passe

  constructor(private router: Router) { }

  // Fonction pour naviguer vers le tableau de bord
  navigateToTableauDeBord() {
    this.router.navigate(['/tableaudebord']); // Naviguer vers la page tableau de bord
  }

  // Fonction pour basculer la visibilité du mot de passe
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  ngOnInit() {
    console.log('InscriptionPage initialized');
  }
}

