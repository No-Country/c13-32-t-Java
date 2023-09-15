import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() name!: string;
  @Input() disabled: boolean = false;
  @Output() emitClick: EventEmitter<void> = new EventEmitter();
}
