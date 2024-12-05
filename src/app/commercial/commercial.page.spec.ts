import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommercialPage } from './commercial.page';

describe('CommercialPage', () => {
  let component: CommercialPage;
  let fixture: ComponentFixture<CommercialPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CommercialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
