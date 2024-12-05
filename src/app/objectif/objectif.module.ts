import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObjectifPageRoutingModule } from './objectif-routing.module';

import { ObjectifPage } from './objectif.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ObjectifPageRoutingModule
  ],
  declarations: [ObjectifPage]
})
export class ObjectifPageModule {}
