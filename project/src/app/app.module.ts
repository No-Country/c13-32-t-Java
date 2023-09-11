import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/auth/login-form/login-form.component';
import { RegisterFormComponent } from './components/auth/register-form/register-form.component';
import { NavBarComponent } from './components/nav/nav-bar/nav-bar.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './components/search/search/search.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ModalRegisterComponent } from './components/modal/modal-register/modal-register.component';
import { ModalLoginComponent } from './components/modal/modal-login/modal-login.component';
import { FormComponent } from './components/form/form/form.component';
import { DashboardUserComponent } from './components/pages/dashboard-user/dashboard-user.component';
import { DashboardEmployerComponent } from './components/pages/dashboard-employer/dashboard-employer.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { DropDownWindowComponent } from './components/pages/drop-down-window/drop-down-window.component';
import { NavBarEmployerLateralComponent } from './components/nav/nav-bar-employer-lateral/nav-bar-employer-lateral.component';
import { NoticesComponent } from './components/pages/dashboard-employer/notices/notices.component';
import { PostulatesComponent } from './components/pages/dashboard-employer/postulates/postulates.component';
import { NavBarEmployerTopComponent } from './components/nav/nav-bar-employer-top/nav-bar-employer-top.component';
import { SearchEmployeesComponent } from './components/pages/dashboard-employer/search-employees/search-employees.component';
import { PersonalInformationComponent } from './components/pages/personal-information/personal-information.component';
import { InputTextComponent } from './shared/components/input-text/input-text.component';
import { SelectComponent } from './shared/components/select/select.component';
import { CheckboxComponent } from './shared/components/checkbox/checkbox.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    RegisterFormComponent,
    NavBarComponent,
    HomePageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    SearchComponent,
    ModalRegisterComponent,
    ModalLoginComponent,
    FormComponent,
    DashboardUserComponent,
    DashboardEmployerComponent,
    NotFoundPageComponent,
    DropDownWindowComponent,
    NavBarEmployerLateralComponent,
    PostulatesComponent,
    NavBarEmployerTopComponent,
    NoticesComponent,
    SearchEmployeesComponent,
    PersonalInformationComponent,
    InputTextComponent,
    SelectComponent,
    CheckboxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ModalModule.forRoot(),
  ],
  providers: [BsModalService],
  bootstrap: [AppComponent],
})
export class AppModule {}
