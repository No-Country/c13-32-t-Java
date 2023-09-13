import { HttpClientModule } from '@angular/common/http';
import {User} from './User';
import { BehaviorSubject, Observable, of, lastValueFrom } from "rxjs";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from "rxjs";
import { Injectable } from '@angular/core';

@Injectable()
export class PersonalInfoService{

    private urlEndPoint: string = 'http://localhost:8080/user';
    
    private httpHeaders= new HttpHeaders({'Content-type': 'application/json'});

    private edited$ = new BehaviorSubject<User[]>([]);


    constructor(private http: HttpClient){
        this.edited$.subscribe(async(newValue) => {
            const userNew = await this.obtenerUsers();
        })
    }

    //CREAR USUARIO
    async crearUsers(newUser: User) {
// Verificar que los campos no estén en blanco o sean nulos
if (!newUser.userName|| !newUser.password) {
    throw new Error("Todos los campos son obligatorios");
  }

  // Aquí puedes agregar otras validaciones específicas según tus requisitos

  return lastValueFrom(
    this.http.post<User[]>(this.urlEndPoint + '/create', newUser).pipe(
      map((response) => response)
    )
  );
      }

    //OBTENER USUARIOS
    obtenerUsers() {
        return lastValueFrom(this.http.get<User[]>(this.urlEndPoint+'/search').pipe(map((response) => response)));
    }

}
