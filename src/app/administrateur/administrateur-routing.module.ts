import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrateurPage } from './administrateur.page';

const routes: Routes = [
  {
    path: '',
    component: AdministrateurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdministrateurPageRoutingModule {}
