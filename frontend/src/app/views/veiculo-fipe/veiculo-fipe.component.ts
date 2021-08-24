import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-veiculo-fipe',
  templateUrl: './veiculo-fipe.component.html',
  styleUrls: ['./veiculo-fipe.component.css']
})
export class VeiculoFipeComponent implements OnInit {

  constructor(private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Fipe',
      icon: 'directions_car',
      routeUrl: '/veiculos'
    }
  }
  
  ngOnInit(): void {
  }

}
