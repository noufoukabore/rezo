import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-condition',
  templateUrl: './condition.page.html',
  styleUrls: ['./condition.page.scss'],
})
export class ConditionPage {

  // Déclaration de variables pour stocker le contenu des CGU (peut être personnalisé selon vos besoins)
  conditionsGenerales: any;

  constructor(private navCtrl: NavController) {
    // Initialisation des CGU - Cela peut être extrait d'un service API si nécessaire
    this.conditionsGenerales = {
      titre: "Conditions Générales d'Utilisation (CGU)",
      sections: [
        {
          titre: "1. Objet des CGU",
          contenu: "Les Conditions Générales d'Utilisation (CGU) régissent l'accès et l'utilisation de l'application mobile [Nom de l'application] (ci-après 'l'Application'). Cette Application est destinée à la gestion des points de vente, incluant la gestion des stocks, des commandes, des visites commerciales et des statistiques."
        },
        {
          titre: "2. Définitions",
          contenu: "Utilisateur : Toute personne accédant à l’Application, qu’il s’agisse d’un administrateur, d’un superviseur, d’un commercial ou d’un point de vente.\n\nÉditeur : La société [Nom de la société ou du développeur], propriétaire de l'Application.\n\nServices : Les fonctionnalités offertes par l'Application, telles que la gestion des points de vente, des commandes, des stocks, des visites commerciales, et des statistiques."
        },
        {
          titre: "3. Accès à l’Application",
          contenu: "L’accès à l’Application est réservé aux Utilisateurs disposant d’un compte valide.\n\nL’Utilisateur est responsable de l’exactitude des informations fournies lors de la création de son compte.\n\nL’Application est accessible sur les terminaux compatibles sous réserve de disposer d’une connexion internet."
        },
        {
          titre: "4. Création et gestion des comptes",
          contenu: "L'Utilisateur doit fournir des informations exactes, complètes et à jour lors de la création de son compte.\n\nLes identifiants de connexion sont strictement personnels et ne doivent pas être partagés.\n\nEn cas de perte ou de vol des identifiants, l'Utilisateur doit en informer immédiatement l'Éditeur pour sécuriser son compte."
        },
        {
          titre: "5. Obligations des utilisateurs",
          contenu: "Utiliser l’Application de manière conforme à sa finalité.\n\nNe pas tenter de contourner les mesures de sécurité de l’Application.\n\nRespecter la confidentialité des données accessibles via l’Application.\n\nNe pas utiliser l’Application à des fins illicites ou non autorisées."
        },
        {
          titre: "6. Données personnelles",
          contenu: "L’Application collecte et traite des données personnelles conformément à la réglementation en vigueur, notamment le RGPD (Règlement Général sur la Protection des Données).\n\nLes données collectées incluent : nom, prénom, adresse email, géolocalisation, et toute autre information requise pour l'utilisation des fonctionnalités.\n\nL'Utilisateur dispose d'un droit d'accès, de rectification, de suppression et d'opposition sur ses données, en contactant [Adresse électronique du support]."
        },
        {
          titre: "7. Propriété intellectuelle",
          contenu: "Tous les contenus de l’Application (logos, textes, images, codes sources, etc.) sont la propriété exclusive de l’Éditeur. Toute reproduction, modification ou exploitation non autorisée des contenus est strictement interdite."
        },
        {
          titre: "8. Responsabilité",
          contenu: "L'Éditeur s'engage à mettre tout en œuvre pour garantir le bon fonctionnement de l'Application.\n\nL'Éditeur ne peut être tenu responsable en cas de :\n\n- Dysfonctionnements dus à des problèmes techniques, interruptions ou erreurs.\n- Mauvaise utilisation de l'Application par l'Utilisateur.\n- Perte de données résultant de l'utilisation de l'Application."
        },
        {
          titre: "9. Modification des CGU",
          contenu: "L’Éditeur se réserve le droit de modifier les présentes CGU à tout moment. Les Utilisateurs seront informés de toute mise à jour via une notification dans l'Application."
        },
        {
          titre: "10. Résiliation",
          contenu: "L'Éditeur peut suspendre ou résilier un compte en cas de non-respect des CGU.\n\nL'Utilisateur peut demander la suppression de son compte à tout moment via l'Application ou en contactant le support."
        },
        {
          titre: "11. Loi applicable et juridiction",
          contenu: "Les CGU sont régies par la loi [préciser la juridiction compétente]. Tout litige sera soumis aux tribunaux compétents du lieu où l'Éditeur a son siège social."
        },
        {
          titre: "12. Interlocuteur",
          contenu: "Pour toute question ou réclamation relative aux CGU ou à l’utilisation de l’Application, veuillez contacter :\n\nNom de la société : [Nom de la société]\nAdresse : [Adresse complète]\nEmail : [Adresse e-mail de contact]\nTéléphone : [Numéro de téléphone]"
        },
        {
          titre: "13. Acceptation",
          contenu: "En utilisant l’Application, l’Utilisateur reconnaît avoir lu et accepté les présentes CGU."
        }
      ]
    };
  }

  // Méthode pour naviguer vers une autre page, par exemple après l'acceptation des CGU
  acceptConditions() {
    console.log('CGU acceptées');
    this.navCtrl.navigateForward('/home'); // Remplacez '/home' par le chemin vers la page d'accueil ou une autre page
  }
}
