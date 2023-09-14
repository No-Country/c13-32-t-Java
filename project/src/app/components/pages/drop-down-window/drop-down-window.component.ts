import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-drop-down-window',
  templateUrl: './drop-down-window.component.html',
  styleUrls: ['./drop-down-window.component.css']
})
export class DropDownWindowComponent {
  @Input() isDropdownOpen = false;
  @Output() toggleDropdownEvent = new EventEmitter<void>();

  toggleDropdown() {
    this.toggleDropdownEvent.emit();
  }

}
