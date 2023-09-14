import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText1: string = '';
  searchText2: string = '';
  searchResults: any[] = []; // Aquí almacenarás los resultados de búsqueda

  search() {
    
  }
}