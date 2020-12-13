import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './misc/header/header.component';
import { HomeComponent } from './misc/home/home.component';
import { StartComponent } from './questions/start/start.component';
import {DynamicHostDirective} from './directive/add-component.directive';
import { Question1Component } from './questions/question1/question1.component';
import { Question2Component } from './questions/question2/question2.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BaseComponent } from './questions/base/base.component';
import {FinishComponent} from './questions/finish/finish.component';
import { ResultComponent } from './questions/result/result.component';
import { QuestionNumberHeaderComponent } from './questions/misc/question-number-header/question-number-header.component';
import {HttpClientModule} from '@angular/common/http';
import {Question3Component} from './questions/question3/question3.component';
import { ToleranceComponent } from './questions/misc/tolerance/tolerance.component';
import { Question4Component } from './questions/question4/question4.component';
import { Question5Component } from './questions/question5/question5.component';
import { Question6Component } from './questions/question6/question6.component';
import { Question7Component } from './questions/question7/question7.component';
import { Question8Component } from './questions/question8/question8.component';
import { Question9Component } from './questions/question9/question9.component';
import { Question10Component } from './questions/question10/question10.component';
import { Question11Component } from './questions/question11/question11.component';
import { MatchComponent } from './questions/result/match/match.component';
import { NoMatchComponent } from './questions/result/no-match/no-match.component';
import { ToleranceInlineComponent } from './questions/misc/tolerance-inline/tolerance-inline.component';
import { InfoComponent } from './misc/info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    StartComponent,
    Question1Component,
    DynamicHostDirective,
    Question2Component,
    BaseComponent,
    FinishComponent,
    ResultComponent,
    QuestionNumberHeaderComponent,
    Question3Component,
    ToleranceComponent,
    Question4Component,
    Question5Component,
    Question6Component,
    Question7Component,
    Question8Component,
    Question9Component,
    Question10Component,
    Question11Component,
    MatchComponent,
    NoMatchComponent,
    ToleranceInlineComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
