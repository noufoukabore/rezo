import { Component } from '@angular/core';

@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.page.html',
  styleUrls: ['./questionnaire.page.scss'],
})
export class QuestionnairePage {
  questionnaire = {
    id: 1,
    questions: [
      { text: '', reponse: '' },
    ],
  };

  constructor() { }

  ajouterQuestion() {
    // Ajouter une nouvelle question vide
    this.questionnaire.questions.push({ text: '', reponse: '' });
  }

  validerQuestionnaire() {
    // Ici vous pouvez gérer la logique pour enregistrer ou valider le questionnaire
    console.log('Questionnaire validé:', this.questionnaire);
    alert('Questionnaire validé avec succès !');
  }
}
