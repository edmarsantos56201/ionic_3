import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroPage } from './intro.page';
import { NavController } from '../../../node_modules/@ionic/angular';

describe('IntroPage', () => {
  let component: IntroPage;
  let fixture: ComponentFixture<IntroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


//fui eu que coloquei função slide intro
var slides = document.querySelector('ion-slides');
slides.options = {
  effect: 'flip'
}