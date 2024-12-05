import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StatistiquesPage } from './statistiques.page';

describe('StatistiquesPage', () => {
  let component: StatistiquesPage;
  let fixture: ComponentFixture<StatistiquesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(StatistiquesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
