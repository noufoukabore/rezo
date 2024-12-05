import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConnexionPage } from './connexion.page';
import { IonContent } from '@ionic/angular';

describe('ConnexionPage', () => {
  let component: ConnexionPage;
  let fixture: ComponentFixture<ConnexionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnexionPage);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
