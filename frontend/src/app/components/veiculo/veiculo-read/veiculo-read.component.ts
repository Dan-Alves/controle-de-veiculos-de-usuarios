import { VeiculoService } from './../veiculo.service';
import { Component, OnInit } from '@angular/core';
import { VeiculoMarcas } from '../marcas.model';
import { VeiculoAnos } from '../anos.model';
import { Tipo } from '../tipo.model';

@Component({
  selector: 'app-veiculo-read',
  templateUrl: './veiculo-read.component.html',
  styleUrls: ['./veiculo-read.component.css']
})
export class VeiculoReadComponent implements OnInit {

  marcas: VeiculoMarcas[] = []
  displayedColumns = ['nome', 'codigo']
  selected = '';
  anos: VeiculoAnos[] = []

  tipos: Tipo[] = [
    {nome: 'carros'},
    {nome: 'motos'},
    {nome: 'caminhoes'}
  ];

  constructor(private veiculoService: VeiculoService) { }

  ngOnInit(): void {
    this.findMarcas();
    this.findAnos();
  }

  findMarcas() {
    this.veiculoService.findAllMarcasByType('carros')
    .subscribe(marcas => {
      this.marcas = marcas
    })
  }

  findModelos() {

  }

  findAnos() {
    this.veiculoService.findAllAnos('carros', '25', '1241')
      .subscribe(anos => {
        this.anos = anos
      })
  }

}
