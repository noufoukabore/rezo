import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PointDeVentePage } from './pointdevente.page'; // Correction du nom

describe('PointDeVentePage', () => { // Correction du nom
  let component: PointDeVentePage;
  let fixture: ComponentFixture<PointDeVentePage>;

  beforeEach(async () => { // Ajout de async pour une meilleure gestion des tests
    await TestBed.configureTestingModule({
      declarations: [PointDeVentePage] // Déclaration de la page pour le test
    }).compileComponents();

    fixture = TestBed.createComponent(PointDeVentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
