import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { DashboardEmployerComponent } from './components/pages/dashboard-employer/dashboard-employer.component';
import { PostulatesComponent } from './components/pages/dashboard-employer/postulates/postulates.component';
import { NoticesComponent } from './components/pages/dashboard-employer/notices/notices.component';
import { SearchEmployeesComponent } from './components/pages/dashboard-employer/search-employees/search-employees.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { RegisterCompanyComponent } from './components/pages/register-page/register-company/register-company.component';
import { PersonalInformationComponent } from './components/pages/personal-information/personal-information.component';
import { DesktopPageComponent } from './components/pages/desktop-page/desktop-page.component';




const routes: Routes = [
  { path: '',
    pathMatch: 'full',
    redirectTo: 'home'

  },
  { path: 'home', component: HomePageComponent },
  { path: 'Dashboard-Employer', component: DashboardEmployerComponent },
  { path: 'notices', component: NoticesComponent },
  { path: 'postulates', component: PostulatesComponent },
  { path: 'search-employees', component: SearchEmployeesComponent },
  { path: 'registro-empresa', component: RegisterCompanyComponent },
  { path: 'registro-empleado', component: PersonalInformationComponent },
  { path: 'escritorio-empleado', component: DesktopPageComponent },
  {path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
