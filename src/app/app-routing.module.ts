import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'connexion',

    pathMatch: 'full'
  },
  {
    path: 'connexion',
    loadChildren: () => import('./connexion/connexion.module').then(m => m.ConnexionPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./inscription/inscription.module').then(m => m.InscriptionPageModule)
  },

  {
    path: 'tableaudebord',
    loadChildren: () => import('./tableaudebord/tableaudebord.module').then(m => m.TableaudebordPageModule)
  },


  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then(m => m.ProfilePageModule)
  },

  {
    path: 'stock',
    loadChildren: () => import('./stock/stock.module').then(m => m.StockPageModule)
  },

  {
    path: 'questionnaire',
    loadChildren: () => import('./questionnaire/questionnaire.module').then(m => m.QuestionnairePageModule)
  },
  {
    path: 'produit',
    loadChildren: () => import('./produit/produit.module').then(m => m.ProduitPageModule)
  },
  {
    path: 'superviseur',
    loadChildren: () => import('./superviseur/superviseur.module').then(m => m.SuperviseurPageModule)
  },
  {
    path: 'commande',
    loadChildren: () => import('./commande/commande.module').then(m => m.CommandePageModule)
  },
  {
    path: 'pointdevente',
    loadChildren: () => import('./pointdevente/pointdevente.module').then(m => m.PointDeVentePageModule) // Correction ici
  },

  {
    path: 'photo',
    loadChildren: () => import('./photo/photo.module').then(m => m.PhotoPageModule)
  },
  {
    path: 'objectif',
    loadChildren: () => import('./objectif/objectif.module').then(m => m.ObjectifPageModule)
  },
  {
    path: 'statistiques',
    loadChildren: () => import('./statistiques/statistiques.module').then(m => m.StatistiquesPageModule)
  },
 
  {
    path: 'visite',
    loadChildren: () => import('./visite/visite.module').then(m => m.VisitePageModule)
  },

  {
    path: 'administrateur',
    loadChildren: () => import('./administrateur/administrateur.module').then(m => m.AdministrateurPageModule)
  },
  {
    path: 'commercial',
    loadChildren: () => import('./commercial/commercial.module').then(m => m.CommercialPageModule)
  },
  {
    path: 'condition',
    loadChildren: () => import('./condition/condition.module').then(m => m.ConditionPageModule)
  },
  {
    path: 'stock',
    loadChildren: () => import('./stock/stock.module').then(m => m.StockPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],

  exports: [RouterModule]
})
export class AppRoutingModule { }
