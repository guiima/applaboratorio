import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipamentoPage } from './equipamento.page';

describe('EquipamentoPage', () => {
  let component: EquipamentoPage;
  let fixture: ComponentFixture<EquipamentoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipamentoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
