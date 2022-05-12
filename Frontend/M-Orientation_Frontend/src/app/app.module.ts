import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NavComponent } from './component/nav/nav.component';
import { HeaderComponent } from './component/header/header.component';
import { BannerComponent } from './component/banner/banner.component';
import { ContainerComponent } from './component/container/container.component';
import { AboutPrjComponent } from './component/about-prj/about-prj.component';
import { OurTeamComponent } from './component/our-team/our-team.component';

@NgModule({
  declarations: [
    NavComponent,
    HeaderComponent,
    BannerComponent,
    ContainerComponent,
    AboutPrjComponent,
    OurTeamComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [ContainerComponent]
})
export class AppModule { }
