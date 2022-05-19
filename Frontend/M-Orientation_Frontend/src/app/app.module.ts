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
