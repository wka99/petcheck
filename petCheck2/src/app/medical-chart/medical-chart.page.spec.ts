import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalChartPage } from './medical-chart.page';

describe('MedicalChartPage', () => {
  let component: MedicalChartPage;
  let fixture: ComponentFixture<MedicalChartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalChartPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalChartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
