import { VeiculoService } from '../../../services/veiculo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderService } from '../../template/header/header.service';
import { Veiculo } from 'src/app/models/veiculo.model';

@Component({
  selector: 'app-veiculo-cliente-read',
  templateUrl: './veiculo-cliente-read.component.html',
  styleUrls: ['./veiculo-cliente-read.component.css']
})
export class VeiculoClienteReadComponent implements OnInit {

  veiculos: Veiculo[] = [];
  displayedColumns = ['marca', 'modelo', 'ano', 'rodizioAtivo', 'action']
  id: any
  usuario_id: any

  constructor(private veiculoService: VeiculoService,
    private router: Router,
    private route: ActivatedRoute,
    private headerService: HeaderService) { 
      headerService.headerData = {
        title: 'Veículos',
        icon: 'directions_car',
        routeUrl: '/veiculos/view/:id'
      }
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.veiculoService.findAllVeiculos(this.id)
      .subscribe(veiculos => {
        this.veiculos = veiculos
      })
  }

  navigateToVeiculoCreate(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.router.navigate([`/veiculos/create/${this.id}`]);
  }

}
