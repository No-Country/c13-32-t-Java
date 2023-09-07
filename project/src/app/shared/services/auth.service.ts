import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private credentials: { usuario: string; contrasena: string } = {
    usuario: 'admin',
    contrasena: 'admin',
  };

  constructor() {}

  validarUsuario(credentials: {
    usuario: string;
    contrasena: string;
  }): Promise<boolean> {
    return Promise.resolve(
      [
        credentials.usuario === this.credentials.usuario,
        (credentials.contrasena = this.credentials.contrasena),
      ].includes(true)
    );
  }
}
