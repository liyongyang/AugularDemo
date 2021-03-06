/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SellPageComponent } from './sell-page.component';

describe('SellPageComponent', () => {
  let component: SellPageComponent;
  let fixture: ComponentFixture<SellPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
