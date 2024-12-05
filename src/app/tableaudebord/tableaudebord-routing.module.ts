import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableaudebordPage } from './tableaudebord.page';

const routes: Routes = [
  {
    path: '',
    component: TableaudebordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TableaudebordPageRoutingModule {}
