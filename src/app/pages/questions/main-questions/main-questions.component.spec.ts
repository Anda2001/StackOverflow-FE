import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainQuestionsComponent } from './main-questions.component';

describe('MainQuestionsComponent', () => {
  let component: MainQuestionsComponent;
  let fixture: ComponentFixture<MainQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
