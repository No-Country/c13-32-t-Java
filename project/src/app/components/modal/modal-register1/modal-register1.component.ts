import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal-register1',
  templateUrl: './modal-register1.component.html',
  styleUrls: ['./modal-register1.component.css']
})
export class ModalRegister1Component {
  constructor(public bsModalRef: BsModalRef) {}

  closeModal() {
    this.bsModalRef.hide();
  }
}

