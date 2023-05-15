import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {WelcomeComponent} from "./pages/welcome/welcome.component";
import {MainQuestionsComponent} from "./pages/questions/main-questions/main-questions.component";
import {UserComponent} from "./pages/user/user.component";
import {AskQuestionComponent} from "./pages/questions/ask-question/ask-question.component";
import {ViewQuestionComponent} from "./pages/specific-question/view-question/view-question.component";
import {SpecificQuestionComponent} from "./pages/specific-question/specific-question.component";


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'questions', component: MainQuestionsComponent},
  {path: 'user', component: UserComponent},
  {path: 'questions/ask', component: AskQuestionComponent},
  {path: 'specific-question/:id', component: SpecificQuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {

}
