// src/app/models/commercial.model.ts
export interface Commercial {
  id: number;
  nom: string;
  email: string;
  portefeuille: any[];  // Le type 'any' peut être remplacé par un type spécifique si nécessaire
  objectifs: any[];     // Même chose pour 'objectifs'
  performances: any[];  // Propriété ajoutée pour corriger l'erreur
}
