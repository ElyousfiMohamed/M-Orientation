import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BannerComponent} from "./component/banner/banner.component";
import {FormQstComponent} from "./component/form-qst/form-qst.component";
import {ConseilsComponent} from "./component/conseils/conseils.component";

const routes: Routes = [
  {
    path: "",
    component: BannerComponent
  }, {
    path:"form",
    component: FormQstComponent
  }, {
    path:"conseils",
    component: ConseilsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
