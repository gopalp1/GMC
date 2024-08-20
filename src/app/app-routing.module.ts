import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ServicesComponent } from './components/services/services.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'Home',
    component:HomeComponent
  },
  {
    path:'about-us',
    component:AboutUsComponent
  },
  {
    path:'contact-us',
    component:ContactUsComponent
  },
  {
    path:'services',
    component:ServicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
