import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalRegisterComponent } from '../../modal/modal-register/modal-register.component';
import { ModalLoginComponent } from '../../modal/modal-login/modal-login.component';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';
import { ModalRegister1Component } from '../../modal/modal-register1/modal-register1.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  bsModalRef!: BsModalRef;
  pagina: string = '';
  mostrarComponente = false;

  constructor(private modalService: BsModalService, private router: Router, private navigationService: NavigationService) {}
  ngOnInit(): void {
    this.navigationService.currentUrl.subscribe((url) => {
      // Compara la URL actual y decide si mostrar u ocultar el componente
      if (url === '/registro-empresa') {
        this.mostrarComponente = true;
      }else{
        this.mostrarComponente = false;

      }
    });
  }

  openLoginModal() {
    const modalRef: BsModalRef = this.modalService.show(ModalLoginComponent);
  }

  openRegisterModal() {
    const modalRef: BsModalRef = this.modalService.show(ModalRegisterComponent);
  }
  openRegisterModal1() {
    const modalRef: BsModalRef = this.modalService.show(ModalRegister1Component);
  }


}