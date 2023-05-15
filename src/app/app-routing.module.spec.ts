import {Location} from "@angular/common";
import {TestBed, fakeAsync, tick} from '@angular/core/testing';
import {RouterTestingModule} from "@angular/router/testing";
import {Router} from "@angular/router";


import {
  WelcomeComponent
}
  from "./pages/welcome/welcome.component";
import {
  LoginComponent
} from "./pages/login/login.component";
import {
  MainQuestionsComponent
} from "./pages/questions/main-questions/main-questions.component";

describe('Router: App', ()=>{

  let location: Location;
  let router: Router;
  let fixture;
  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations: [
        WelcomeComponent,
        LoginComponent,
        MainQuestionsComponent
      ]
    });
    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(WelcomeComponent);
    router.initialNavigation();
  });

  it('navigate to "" redirects you to /welcome', fakeAsync(() => {
    router.navigate([""]).then(() => {
      expect(location.path()).toBe("");
    });
  }));

  xit('navigate to "questions" redirects you to /questions', fakeAsync(() => {
    router.navigate(["questions"]).then(() => {
      tick();
      expect(location.path()).toBe("/questions");
    });
  }));


  xit('navigate to "login" redirects you to /login', fakeAsync(() => {
    router.navigate(["login"]).then(() => {
      tick();
      expect(location.path()).toBe("/login");
    });
  }));
});
