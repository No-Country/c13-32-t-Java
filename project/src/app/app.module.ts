import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { CdkStepperModule } from '@angular/cdk/stepper';

//Componentes
import { NavBarEmployerLateralComponent } from './components/nav/nav-bar-employer-lateral/nav-bar-employer-lateral.component';
import { NavBarComponent } from './components/nav/nav-bar/nav-bar.component';
import { LoginFormComponent } from './components/form/login-form/login-form.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { DashboardEmployerComponent } from './components/pages/dashboard-employer/dashboard-employer.component';
import { NoticesComponent } from './components/pages/dashboard-employer/notices/notices.component';
import { PostulatesComponent } from './components/pages/dashboard-employer/postulates/postulates.component';
import { SearchEmployeesComponent } from './components/pages/dashboard-employer/search-employees/search-employees.component';
import { DashboardEmployeeComponent } from './components/pages/dashboard-employee/dashboard-employee.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { NotFoundPageComponent } from './components/pages/not-found-page/not-found-page.component';
import { SearchComponent } from './components/search/search.component';
import { ModalLoginComponent } from './components/modal/modal-login/modal-login.component';
import { ModalRegisterComponent } from './components/modal/modal-register/modal-register.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DropDownWindowComponent } from './components/pages/drop-down-window/drop-down-window.component';
import { NavBarEmployerTopComponent } from './components/nav/nav-bar-employer-top/nav-bar-employer-top.component';
import { RegisterFormComponent } from './components/form/register-form/register-form.component';
import { NavBartopDirectiveComponent } from './components/directivas/nav-bartop-directive/nav-bartop-directive.component';
import { FormRegisterEmployerInitComponent } from './components/form/form-register-employer-init/form-register-employer-init.component';
import {MatRadioModule} from '@angular/material/radio';
import {NgFor} from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ButtonComponent } from './shared/components/button/button.component';
import { RegisterCompanyComponent } from './components/pages/register-page/register-company/register-company.component';
import { StepperContainerComponent } from './components/step/stepper-container/stepper-container.component';
import { InputTextComponent } from './shared/components/input-text/input-text.component';
import { SelectComponent } from './shared/components/select/select.component';
import { CheckboxComponent } from './shared/components/checkbox/checkbox.component';
import { FormRegisterEmployerSecondComponent } from './components/form/form-register-employer-second/form-register-employer-second.component';
import { FormRegisterOferComponent } from './components/form/form-register-ofer/form-register-ofer.component';
import { PublicationSuccessfulComponent } from './components/pages/publication-successful/publication-successful.component';
import { FooterComponent } from './components/pages/home-page/footer/footer.component';
import { PersonalInformationComponent } from './components/pages/personal-information/personal-information.component';
import { PersonalInfoService } from './components/pages/personal-information/personal-information.service';
import { DesktopPageComponent } from './components/pages/desktop-page/desktop-page.component';
import { RegisterForm1Component } from './components/form/register-form1/register-form1.component';
import { ModalRegister1Component } from './components/modal/modal-register1/modal-register1.component';
import { RegisterPage1Component } from './components/pages/register-page1/register-page1.component';
import { BriefJobOfferComponent } from './shared/components/brief-job-offer/brief-job-offer.component';
import { NavBarEmployeeLateralComponent } from './components/nav/nav-bar-employee-lateral/nav-bar-employee-lateral.component';




@NgModule({
  declarations: [
    AppComponent,
    NavBarEmployerLateralComponent,
    NavBarComponent,
    LoginFormComponent,
    HomePageComponent,
    DashboardEmployerComponent,
    NoticesComponent,
    PostulatesComponent,
    SearchEmployeesComponent,
    DashboardEmployeeComponent,
    LoginPageComponent,
    RegisterPageComponent,
    NotFoundPageComponent,
    SearchComponent,
    ModalLoginComponent,
    ModalRegisterComponent,
    DropDownWindowComponent,
    NavBarEmployerTopComponent,
    RegisterFormComponent,
    NavBartopDirectiveComponent,
    FormRegisterEmployerInitComponent,
    RegisterCompanyComponent,
    StepperContainerComponent,
    InputTextComponent,
    SelectComponent,
    CheckboxComponent,
    FormRegisterEmployerSecondComponent,
    FormRegisterOferComponent,
    PublicationSuccessfulComponent,
    FooterComponent,
    PersonalInformationComponent,
    ButtonComponent,
    DesktopPageComponent,
    RegisterForm1Component,
    ModalRegister1Component,
    RegisterPage1Component,
    BriefJobOfferComponent,
    NavBarEmployeeLateralComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    // Formularios Reactivos:
    ReactiveFormsModule,
    // Módulo personalizado de Angular Material
    MaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatRadioModule,
    DragDropModule,
    MatFormFieldModule, 
    MatSelectModule, 
    NgFor, 
    CdkStepperModule,
   
  ],
  providers: [BsModalService, PersonalInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
