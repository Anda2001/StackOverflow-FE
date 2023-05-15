import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificQuestionComponent } from './specific-question.component';

describe('SpecificQuestionComponent', () => {
  let component: SpecificQuestionComponent;
  let fixture: ComponentFixture<SpecificQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificQuestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecificQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
