import { Usuario } from './usuario.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY } from 'rxjs';
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  baseUrl = "http://localhost:8080/usuarios"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "Fechar", {
      duration: 2000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  insert(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.baseUrl, usuario)
  }

  findAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.baseUrl)
  }

  findById(usuario_id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseUrl}/${usuario_id}`)
  }

  update(obj: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>(`${this.baseUrl}/${obj.id}`, obj).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
    // return this.http.put<Usuario>(`${this.baseUrl}/${obj.id}`, obj)
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }
}
