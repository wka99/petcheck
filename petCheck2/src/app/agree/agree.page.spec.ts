import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreePage } from './agree.page';

describe('AgreePage', () => {
  let component: AgreePage;
  let fixture: ComponentFixture<AgreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgreePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
