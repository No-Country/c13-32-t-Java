import { Component, OnInit } from '@angular/core';
import { User } from './User';
import { PersonalInfoService } from './personal-information.service';

@Component({
  templateUrl: './personal-information.component.html',
})

export class UserComponent implements OnInit {

  user: User[] | undefined;

  constructor(private personalInfoService: PersonalInfoService) { }

  async ngOnInit() {
    await this.obtenerUser();
  }

  async obtenerUser() {
    // Crear un nuevo usuario
    const newUser: User = {
      userName: 'dai@gmail.com', 
      password: '1234' 
    };

    // Llamar a crearUsers para agregar el nuevo usuario
    await this.personalInfoService.crearUsers(newUser);

    // Obtener la lista actualizada de usuarios
    this.user = await this.personalInfoService.obtenerUsers();
  }
}
