import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveminPage } from './movemin.page';

describe('MoveminPage', () => {
  let component: MoveminPage;
  let fixture: ComponentFixture<MoveminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveminPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
