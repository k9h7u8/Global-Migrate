import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { VisaInformationComponent } from './pages/visa-information/visa-information.component';
import { ServicesComponent } from './pages/services/services.component';
import { InstituteComponent } from './pages/institute/institute.component';
import { VisaComponent } from './pages/visa/visa.component';
import { ResultsComponent } from './pages/results/results.component';

const routes: Routes = [
  {path: '',redirectTo:'home', pathMatch:'full'},
  {path: 'home',component: HomeComponent},
  {path:'about', component: AboutComponent},
  {path:'contact', component: ContactComponent},
  {path:'visa-information', component: VisaInformationComponent},
  {path:'services', component: ServicesComponent},
  {path:'institute', component: InstituteComponent},
  {path:'visa', component: VisaComponent},
  {path:'results', component: ResultsComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
