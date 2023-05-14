import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutTagsComponent } from './layout-tags.component';

describe('LayoutTagsComponent', () => {
  let component: LayoutTagsComponent;
  let fixture: ComponentFixture<LayoutTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutTagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LayoutTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
