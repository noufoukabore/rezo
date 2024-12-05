import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ObjectifPage } from './objectif.page';

describe('ObjectifPage', () => {
  let component: ObjectifPage;
  let fixture: ComponentFixture<ObjectifPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectifPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
