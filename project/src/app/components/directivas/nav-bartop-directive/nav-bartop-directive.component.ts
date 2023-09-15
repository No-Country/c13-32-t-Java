import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-nav-bartop-directive',
  templateUrl: './nav-bartop-directive.component.html',
  styleUrls: ['./nav-bartop-directive.component.css']
})
export class NavBartopDirectiveComponent implements OnInit {
  pagina: string = '';
  mostrarComponente = false;

  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
    this.navigationService.currentUrl.subscribe((url) => {
      // Compara la URL actual y decide si mostrar u ocultar el componente
      if (url === '/Dashboard-Employer') {
        this.mostrarComponente = true;
      } else if (url === '/notices'){
        this.mostrarComponente = false;
        this.pagina= 'Mis Avisos'
      } else if (url === '/postulates'){
        this.mostrarComponente = false;
        this.pagina= 'Postulados'
      }else{
        this.mostrarComponente = false;
        this.pagina= 'Buscar trabajador'
      }
    });
  }
}

