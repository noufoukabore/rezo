import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TableaudebordPageRoutingModule } from './tableaudebord-routing.module';

import { TableaudebordPage } from './tableaudebord.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TableaudebordPageRoutingModule
  ],
  declarations: [TableaudebordPage]
})
export class TableaudebordPageModule {}
