import { Usuario } from './usuario.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl = "http://localhost:8080/usuarios"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string) : void {
    this.snackBar.open(msg, 'Fechar', {
      duration: 2000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  insert(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.baseUrl, usuario)
  }

  findAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.baseUrl)
  }
}
