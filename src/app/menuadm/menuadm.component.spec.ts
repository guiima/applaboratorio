import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuadmComponent } from './menuadm.component';

describe('MenuadmComponent', () => {
  let component: MenuadmComponent;
  let fixture: ComponentFixture<MenuadmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuadmComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuadmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
