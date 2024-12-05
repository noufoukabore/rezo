// src/models/superviseur.model.ts
import { Commercial } from 'src/app/models/commercial.model';

export interface Superviseur {
  id: number;
  nom: string;
  commerciaux: Commercial[];
}
