import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObjectifPage } from './objectif.page';

const routes: Routes = [
  {
    path: '',
    component: ObjectifPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObjectifPageRoutingModule {}
