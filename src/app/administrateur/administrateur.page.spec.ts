import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdministrateurPage } from './administrateur.page';

describe('AdministrateurPage', () => {
  let component: AdministrateurPage;
  let fixture: ComponentFixture<AdministrateurPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrateurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
