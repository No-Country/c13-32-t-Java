import { Component } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.css']
})
export class ModalLoginComponent {
  constructor(public bsModalRef: BsModalRef) {}

  closeModal() {
    this.bsModalRef.hide();
  }
}
