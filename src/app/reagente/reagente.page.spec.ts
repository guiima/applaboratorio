import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReagentePage } from './reagente.page';

describe('ReagentePage', () => {
  let component: ReagentePage;
  let fixture: ComponentFixture<ReagentePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReagentePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReagentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
