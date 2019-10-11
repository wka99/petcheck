import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovemaxPage } from './movemax.page';

describe('MovemaxPage', () => {
  let component: MovemaxPage;
  let fixture: ComponentFixture<MovemaxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovemaxPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovemaxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
