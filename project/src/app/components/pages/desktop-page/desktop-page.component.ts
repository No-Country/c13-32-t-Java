import { Component } from '@angular/core';
import { IBriefJobOffer } from 'src/app/shared/models/interfaces';

@Component({
  selector: 'app-desktop-page',
  templateUrl: './desktop-page.component.html',
  styleUrls: ['./desktop-page.component.css'],
})
export class DesktopPageComponent {
  employeeResume: any = {
    firstName: '',
    lastName: '',
    position: '',
  };

  applications: IBriefJobOffer[] = [
    {
      title: 'Desarrollador Front-end',
      company: 'TechCorp',
      date: '2023-09-15',
      seen: true,
      isFavorite: false,
    },
    {
      title: 'Analista de Datos',
      company: 'DataTech',
      date: '2023-09-14',
      seen: false,
      isFavorite: true,
    },
    {
      title: 'Diseñador UX/UI',
      company: 'DesignIt',
      date: '2023-09-13',
      seen: true,
      isFavorite: false,
    },
    {
      title: 'Ingeniero de Software',
      company: 'CodeMasters',
      date: '2023-09-12',
      seen: false,
      isFavorite: false,
    },
    {
      title: 'Gerente de Proyectos',
      company: 'ProjectPro',
      date: '2023-09-11',
      seen: true,
      isFavorite: false,
    },
  ];
  favorites: IBriefJobOffer[] = [
    {
      title: 'Ingeniero de Sistemas',
      company: 'SysTech',
      date: '2023-09-08',
      seen: false,
      isFavorite: true,
    },
    {
      title: 'Especialista en Recursos Humanos',
      company: 'HRWorld',
      date: '2023-09-07',
      seen: true,
      isFavorite: true,
    },
    {
      title: 'Técnico de Soporte Técnico',
      company: 'TechSupport',
      date: '2023-09-06',
      seen: false,
      isFavorite: true,
    },
  ];
  recommendations: IBriefJobOffer[] = [
    {
      title: 'Contador Senior',
      company: 'FinanceCorp',
      date: '2023-09-05',
      seen: true,
      isFavorite: false,
    },
    {
      title: 'Arquitecto de Soluciones',
      company: 'SolutionArch',
      date: '2023-09-04',
      seen: true,
      isFavorite: true,
    },
    {
      title: 'Diseñador Gráfico Senior',
      company: 'ArtDesign',
      date: '2023-09-03',
      seen: false,
      isFavorite: false,
    },
    {
      title: 'Especialista en Ventas',
      company: 'SalesPro',
      date: '2023-09-02',
      seen: true,
      isFavorite: true,
    },
    {
      title: 'Gerente de Marketing',
      company: 'MarketingMasters',
      date: '2023-09-01',
      seen: false,
      isFavorite: true,
    },
  ];

  getCV(): void {}
}