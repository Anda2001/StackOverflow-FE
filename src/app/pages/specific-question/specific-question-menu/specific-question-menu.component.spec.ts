import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificQuestionMenuComponent } from './specific-question-menu.component';

describe('SpecificQuestionMenuComponent', () => {
  let component: SpecificQuestionMenuComponent;
  let fixture: ComponentFixture<SpecificQuestionMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificQuestionMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecificQuestionMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
