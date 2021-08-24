import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, EMPTY } from 'rxjs';
import { VeiculoMarcas } from './marcas.model';
import { Veiculo } from './veiculo.model';
import { map, catchError } from "rxjs/operators";
import { VeiculoModelos } from './modelos.model';
import { VeiculoFipe } from './veiculoFipe.model';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  baseUrl = "http://localhost:8080"
  veiculo!: Veiculo;

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "Fechar", {
      duration: 2000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  findAllMarcasByType(tipo: string): Observable<VeiculoMarcas[]> {
    return this.http.get<VeiculoMarcas[]>(`${this.baseUrl}/${tipo}/marcas`)
  }

  findAllModelos(tipo: string, codMarca: string): Observable<VeiculoModelos[]> {
    return this.http.get<VeiculoMarcas[]>(`${this.baseUrl}/${tipo}/marcas/${codMarca}/modelos`)
  }

  findAllAnos(tipo: string, codMarca: string, codModelo: string): Observable<VeiculoMarcas[]> {
    return this.http.get<VeiculoMarcas[]>(`${this.baseUrl}/${tipo}/marcas/${codMarca}/modelos/${codModelo}/anos`)
  }

  findFipe(tipo: string, codMarca: string, codModelo: string, codAno: string): Observable<VeiculoFipe[]> {
    return this.http.get<VeiculoFipe[]>(`${this.baseUrl}/${tipo}/marcas/${codMarca}/modelos/${codModelo}/anos/${codAno}`)
  }

  findAllVeiculos(id: number): Observable<Veiculo[]> {
    return this.http.get<Veiculo[]>(`${this.baseUrl}/usuarios/${id}/veiculos`)
  }

  update(obj: Veiculo): Observable<Veiculo>{
    return this.http.put<Veiculo>(`${this.baseUrl}/veiculos/${obj.id}`, obj).pipe(
      map((obj) => obj),
      catchError((e) => this.errorHandler(e))
    );
  }

  errorHandler(e: any): Observable<any> {
    this.showMessage("Ocorreu um erro!", true);
    return EMPTY;
  }

  findById(id: number): Observable<Veiculo> {
    return this.http.get<Veiculo>(`${this.baseUrl}/veiculos/${id}`)
  }

  insert(obj: Veiculo, usuario_id: number): Observable<Veiculo> {
    return this.http.post<Veiculo>(`${this.baseUrl}/veiculos/${usuario_id}`, obj)
  }
  
}
