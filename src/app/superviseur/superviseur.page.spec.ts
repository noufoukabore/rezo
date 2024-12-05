import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuperviseurPage } from './superviseur.page';

describe('SuperviseurPage', () => {
  let component: SuperviseurPage;
  let fixture: ComponentFixture<SuperviseurPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperviseurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
