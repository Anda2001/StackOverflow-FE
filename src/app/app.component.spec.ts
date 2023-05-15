import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'fe-stackoverflow'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('fe-stackoverflow');
  });

  it('should log the message in the console', () => {
    spyOn(console, 'log');
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(console.log).toHaveBeenCalledWith('fe-stackoverflow app is running!');
  });
});
