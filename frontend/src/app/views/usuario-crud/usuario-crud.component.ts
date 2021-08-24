import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-usuario-crud',
  templateUrl: './usuario-crud.component.html',
  styleUrls: ['./usuario-crud.component.css']
})
export class UsuarioCrudComponent implements OnInit {

  constructor(private router : Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Clientes',
      icon: 'people',
      routeUrl: '/usuarios'
    }
  }

  ngOnInit(): void {
  }

  navigateToUsuarioCreate() : void {
    this.router.navigate(['/usuarios/create'])
  }

}
