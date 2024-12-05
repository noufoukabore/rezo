import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdministrateurPageRoutingModule } from './administrateur-routing.module';

import { AdministrateurPage } from './administrateur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdministrateurPageRoutingModule
  ],
  declarations: [AdministrateurPage]
})
export class AdministrateurPageModule {}
