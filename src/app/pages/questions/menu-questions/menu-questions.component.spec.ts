import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuQuestionsComponent } from './menu-questions.component';

describe('MenuQuestionsComponent', () => {
  let component: MenuQuestionsComponent;
  let fixture: ComponentFixture<MenuQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuQuestionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
