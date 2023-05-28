import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginComponent} from "./pages/login/login.component";
import { RegisterComponent } from './pages/register/register.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { MainQuestionsComponent } from './pages/questions/main-questions/main-questions.component';
import { HeaderQuestionsComponent } from './pages/questions/header-questions/header-questions.component';
import { MenuQuestionsComponent } from './pages/questions/menu-questions/menu-questions.component';
import { LayoutQuestionsComponent } from './pages/questions/layout-questions/layout-questions.component';
import { LayoutUsersComponent } from './pages/questions/layout-users/layout-users.component';
import { LayoutTagsComponent } from './pages/questions/layout-tags/layout-tags.component';
import { AskQuestionComponent } from './pages/questions/ask-question/ask-question.component';
import { UserComponent } from './pages/user/user.component';
import {FormsModule} from "@angular/forms";
import { UserHeaderComponent } from './pages/user/user-header/user-header.component';
import { UserLayoutComponent } from './pages/user/user-layout/user-layout.component';
import { ViewQuestionComponent } from './pages/specific-question/view-question/view-question.component';
import { SpecificQuestionComponent } from './pages/specific-question/specific-question.component';
import { SpecificQuestionHeaderComponent } from './pages/specific-question/specific-question-header/specific-question-header.component';
import { SpecificQuestionMenuComponent } from './pages/specific-question/specific-question-menu/specific-question-menu.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    WelcomeComponent,
    MainQuestionsComponent,
    HeaderQuestionsComponent,
    MenuQuestionsComponent,
    LayoutQuestionsComponent,
    LayoutUsersComponent,
    LayoutTagsComponent,
    AskQuestionComponent,
    UserComponent,
    UserHeaderComponent,
    UserLayoutComponent,
    ViewQuestionComponent,
    SpecificQuestionComponent,
    SpecificQuestionHeaderComponent,
    SpecificQuestionMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
