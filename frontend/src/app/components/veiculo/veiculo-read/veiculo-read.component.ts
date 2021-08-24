import { VeiculoService } from './../veiculo.service';
import { Component, OnInit } from '@angular/core';
import { VeiculoMarcas } from '../marcas.model';
import { VeiculoAnos } from '../anos.model';
import { Tipo } from '../tipo.model';
import { VeiculoModelos } from '../modelos.model';
import { VeiculoFipe } from '../veiculoFipe.model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-veiculo-read',
  templateUrl: './veiculo-read.component.html',
  styleUrls: ['./veiculo-read.component.css']
})
export class VeiculoReadComponent implements OnInit {

  veiculo: VeiculoFipe[] = []
  marcas: VeiculoMarcas[] = []
  modelos: VeiculoModelos[] = []
  displayedColumns = ['nome', 'codigo']
  selectedAno = '';
  selectedMarca = '';
  selectedModelo = '';
  selectedTipo = '';
  anos: VeiculoAnos[] = []
  selected = '';
  valor!: any

  tipos: Tipo[] = [
    {nome: 'carros'},
    {nome: 'motos'},
    {nome: 'caminhoes'}
  ];

  constructor(private veiculoService: VeiculoService) { }

  ngOnInit(): void {
    this.findMarcas('carros');
    this.findModelos('carros', '59');
    this.findAnos('carros', '59', '5940');
  }

  findMarcas(selectedTipo: string) {
    this.veiculoService.findAllMarcasByType(selectedTipo)
    .subscribe(marcas => {
      this.marcas = marcas
    })
  }

  findModelos(selectedTipo: string, selectedMarca: string) {
    this.veiculoService.findAllModelos(selectedTipo, selectedMarca)
      .subscribe(modelos => {
        this.modelos = modelos
      })
  }

  findAnos(selectedTipo: string, selectedMarca: string, selectedModelo: string) {
    this.veiculoService.findAllAnos(selectedTipo, selectedMarca, selectedModelo)
      .subscribe(anos => {
        this.anos = anos
      })
  }

  buscar(tipos: string, codMarca: string, codModelo: string, codAno: string) {
    this.veiculoService.findFipe(tipos, codMarca, codModelo, codAno)
      .subscribe(veiculo => {
        this.veiculo = veiculo
        console.log(veiculo)
      })
  }

}
