import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalRegisterComponent } from '../../modal/modal-register/modal-register.component';
import { ModalLoginComponent } from '../../modal/modal-login/modal-login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  bsModalRef!: BsModalRef;

  constructor(private modalService: BsModalService, private router: Router) {}

  openLoginModal() {
    const modalRef: BsModalRef = this.modalService.show(ModalLoginComponent);
  }

  openRegisterModal() {
    const modalRef: BsModalRef = this.modalService.show(ModalRegisterComponent);
  }


}

