import { VeiculoService } from './../veiculo.service';
import { Component, OnInit } from '@angular/core';
import { VeiculoMarcas } from '../marcas.model';

@Component({
  selector: 'app-veiculo-read',
  templateUrl: './veiculo-read.component.html',
  styleUrls: ['./veiculo-read.component.css']
})
export class VeiculoReadComponent implements OnInit {

  marcas: VeiculoMarcas[] = []
  displayedColumns = ['nome', 'codigo']

  constructor(private veiculoService: VeiculoService) { }

  ngOnInit(): void {
    this.veiculoService.findAllMarcasByType('carros')
      .subscribe(marcas => {
        this.marcas = marcas
      })
  }

}
