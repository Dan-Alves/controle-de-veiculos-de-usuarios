import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { VeiculoMarcas } from './marcas.model';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  baseUrl = "http://localhost:8080"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string) : void {
    this.snackBar.open(msg, 'Fechar', {
      duration: 2000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  findAllMarcasByType(tipo: string): Observable<VeiculoMarcas[]> {
    return this.http.get<VeiculoMarcas[]>(`${this.baseUrl}/${tipo}/marcas`)
  }
}
