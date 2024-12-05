import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuperviseurPageRoutingModule } from './superviseur-routing.module';

import { SuperviseurPage } from './superviseur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuperviseurPageRoutingModule
  ],
  declarations: [SuperviseurPage]
})
export class SuperviseurPageModule {}
