import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuuserComponent } from './menuuser.component';

describe('MenuuserComponent', () => {
  let component: MenuuserComponent;
  let fixture: ComponentFixture<MenuuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuuserComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
