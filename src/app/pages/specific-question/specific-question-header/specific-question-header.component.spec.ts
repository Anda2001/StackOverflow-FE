import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificQuestionHeaderComponent } from './specific-question-header.component';

describe('SpecificQuestionHeaderComponent', () => {
  let component: SpecificQuestionHeaderComponent;
  let fixture: ComponentFixture<SpecificQuestionHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificQuestionHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecificQuestionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
