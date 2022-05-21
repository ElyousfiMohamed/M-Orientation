import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BannerComponent} from "./component/banner/banner.component";
import {FormQstComponent} from "./component/form-qst/form-qst.component";
import {ConseilsComponent} from "./component/conseils/conseils.component";
import {TeamPageComponent} from "./component/team-page/team-page.component";
import {AboutPrjComponent} from "./component/about-prj/about-prj.component";
import {AboutComponent} from "./component/about/about.component";
import {ContactComponent} from "./component/contact/contact.component";
import {MailSuccessComponent} from "./component/mail-success/mail-success.component";
import {MailFailedComponent} from "./component/mail-failed/mail-failed.component";
import {ResultComponent} from "./component/result/result.component";

const routes: Routes = [
  {
    path: "",
    component: BannerComponent
  }, {
    path:"form",
    component: FormQstComponent
  }, {
    path:"advices",
    component: ConseilsComponent
  }, {
    path:"team",
    component: TeamPageComponent
  }, {
    path:"project",
    component: AboutComponent
  }, {
    path:"contact",
    component: ContactComponent
  }, {
    path:"success",
    component: MailSuccessComponent
  }, {
    path:"failed",
    component: MailFailedComponent
  }, {
    path:"result",
    component: ResultComponent
  }, {
    path:"**",
    component: BannerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
