import { Component } from '@angular/core';

interface Produit {
  id: number;
  nom: string;
  categorie: string;
  quantite: number;
  prixUnitaire: number;
}

@Component({
  selector: 'app-produit',
  templateUrl: './produit.page.html',
  styleUrls: ['./produit.page.scss'],
})
export class ProduitPage {
  // Modèle d'un produit avec les bonnes propriétés
  produit: Produit = {
    id: 0,
    nom: '',
    categorie: '',
    quantite: 0,
    prixUnitaire: 0,
  };

  // Tableau des produits avec typage explicite
  produits: Produit[] = [];

  constructor() { }

  // Méthode pour calculer le prix total (quantité * prix unitaire)
  calculerPrixTotal(): number {
    return this.produit.quantite * this.produit.prixUnitaire;
  }

  // Méthode appelée lors de la soumission du formulaire pour ajouter un produit
  ajouter() {
    if (this.produit.nom && this.produit.categorie && this.produit.quantite > 0 && this.produit.prixUnitaire > 0) {
      const nouveauProduit: Produit = { ...this.produit, id: Date.now() }; // Ajout d'un ID unique
      this.produits.push(nouveauProduit); // Ajout du produit dans le tableau

      // Réinitialisation du formulaire après l'ajout du produit
      this.produit = {
        id: 0,
        nom: '',
        categorie: '',
        quantite: 0,
        prixUnitaire: 0,
      };
    }
  }


  modifier(produit: Produit) {
    this.produit = { ...produit };
  }
  // Méthode pour supprimer un produit
  supprimer(id: number) {
    this.produits = this.produits.filter(p => p.id !== id);
  }
}
