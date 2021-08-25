import { VeiculoService } from '../../../services/veiculo.service';
import { Component, OnInit } from '@angular/core';
import { VeiculoAnos } from '../../../models/anos.model';
import { VeiculoFipe } from 'src/app/models/veiculoFipe.model';
import { VeiculoMarcas } from 'src/app/models/marcas.model';
import { VeiculoModelos } from 'src/app/models/modelos.model';
import { Tipo } from 'src/app/models/tipo.model';

@Component({
  selector: 'app-veiculo-read',
  templateUrl: './veiculo-read.component.html',
  styleUrls: ['./veiculo-read.component.css']
})
export class VeiculoReadComponent implements OnInit {

  veiculo: VeiculoFipe[] = [];
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
    {nome: 'caminhoes'},
  ];

  constructor(private veiculoService: VeiculoService) { }

  ngOnInit(): void {
    this.findMarcas('carros');
    this.findModelos('carros', '59');
    this.findAnos('carros', '59', '5940');
  }

  findMarcas(selectedTipo: string) {
    this.veiculoService.findAllMarcas(selectedTipo)
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
        var obj = JSON.stringify(veiculo)
        console.log(obj)        
        this.valor = obj.substring(10, obj.length-2)
      })
  }

}
