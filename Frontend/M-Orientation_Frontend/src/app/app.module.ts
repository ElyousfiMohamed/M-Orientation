import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NavComponent } from './component/nav/nav.component';
import { BannerComponent } from './component/banner/banner.component';
import { AboutPrjComponent } from './component/about-prj/about-prj.component';
import { OurTeamComponent } from './component/our-team/our-team.component';
import { FormQstComponent } from './component/form-qst/form-qst.component';
import {AppComponent} from "./component/app.component";
import {InputsService} from "./service/inputs.service";
import {AppRoutingModule} from "./app-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RecaptchaModule} from "ng-recaptcha";
import { FooterComponent } from './component/footer/footer.component';
import { ConseilsComponent } from './component/conseils/conseils.component';
import { TeamPageComponent } from './component/team-page/team-page.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { MailSuccessComponent } from './component/mail-success/mail-success.component';
import { MailFailedComponent } from './component/mail-failed/mail-failed.component';
import { ResultComponent } from './component/result/result.component';
import { ChartGenderComponent } from './component/chart-gender/chart-gender.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BannerComponent,
    AboutPrjComponent,
    OurTeamComponent,
    FormQstComponent,
    FooterComponent,
    ConseilsComponent,
    TeamPageComponent,
    AboutComponent,
    ContactComponent,
    MailSuccessComponent,
    MailFailedComponent,
    ResultComponent,
    ChartGenderComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        RecaptchaModule
    ],
  providers: [InputsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
