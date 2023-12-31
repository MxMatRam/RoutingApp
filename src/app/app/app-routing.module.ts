import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { BobComponent } from "./about/bob/bob.component";
import { SusanComponent } from "./about/susan/susan.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const appRoutes: Routes = [
  { path: '', pathMatch: "full", redirectTo: "home" },
  { path: 'home', component: HomeComponent },
  { path: "about", component: AboutComponent,
      children: [
        { path: 'bob', component: BobComponent },
        { path: 'susan', component: SusanComponent },
      ]
  },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
