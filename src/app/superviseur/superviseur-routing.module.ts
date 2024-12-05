import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuperviseurPage } from './superviseur.page';

const routes: Routes = [
  {
    path: '',
    component: SuperviseurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuperviseurPageRoutingModule {}
