import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableaudebordPage } from './tableaudebord.page';

describe('TableaudebordPage', () => {
  let component: TableaudebordPage;
  let fixture: ComponentFixture<TableaudebordPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TableaudebordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
