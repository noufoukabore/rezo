import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PointDeVentePage } from './pointdevente.page'; // Correction du nom

const routes: Routes = [
  {
    path: '',
    component: PointDeVentePage // Correction du nom
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)

  ],
  exports: [RouterModule],

})
export class PointDeVentePageRoutingModule { } // Correction du nom
