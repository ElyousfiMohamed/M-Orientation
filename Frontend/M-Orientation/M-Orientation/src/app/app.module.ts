import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { NavComponent } from './component/nav/nav.component';
import { LandingComponent } from './component/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LandingComponent
  ],
    imports: [
        BrowserModule,
        RouterModule
    ],
  providers: [],
  bootstrap: [NavComponent]
})
export class AppModule { }
