import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar-employer-top',
  templateUrl: './nav-bar-employer-top.component.html',
  styleUrls: ['./nav-bar-employer-top.component.css']
})
export class NavBarEmployerTopComponent {
  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
