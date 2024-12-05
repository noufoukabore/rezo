import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { PointDeVentePageRoutingModule } from './pointdevente-routing.module';
import { PointDeVentePage } from './pointdevente.page'; // Correction du nom

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, // Assurez-vous d'inclure cela
    IonicModule,
    PointDeVentePageRoutingModule
  ],
  declarations: [PointDeVentePage], // Correction du nom
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // Optionnel, si vous avez des erreurs sur les éléments personnalisés
})
export class PointDeVentePageModule { } // Correction du nom
