import { Component } from '@angular/core';
import { Router } from '@angular/router';  // Importation du Router

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage {
  email: string = ''; // Variable pour l'email
  password: string = ''; // Variable pour le mot de passe
  showPassword: boolean = false; // Variable pour afficher ou cacher le mot de passe

  constructor(private router: Router) { }  // Injection du Router

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword; // Inverse l'état de la visibilité du mot de passe
  }

  // Méthode pour rediriger vers la page des Conditions Générales d'Utilisation
  navigateToCondition() {
    this.router.navigate(['/conditions']);
  }

  // Méthode pour naviguer vers le tableau de bord
  navigateToTableauDeBord() {
    this.router.navigate(['tableaudebord']); // Navigation vers le tableau de bord
  }

  // Méthode pour naviguer vers la page d'inscription
  navigateToInscription() {
    this.router.navigate(['inscription']); // Navigation vers la page d'inscription
  }
}
