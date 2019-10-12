import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursoPage } from './recurso.page';

describe('RecursoPage', () => {
  let component: RecursoPage;
  let fixture: ComponentFixture<RecursoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecursoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
