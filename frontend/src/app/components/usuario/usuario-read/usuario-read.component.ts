import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario.model';
import { VeiculoService } from '../../veiculo/veiculo.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario-read',
  templateUrl: './usuario-read.component.html',
  styleUrls: ['./usuario-read.component.css']
})
export class UsuarioReadComponent implements OnInit {

  usuarios!: Usuario[];
  displayedColumns = ['nome', 'email', 'cpf', 'telefone', 'nascimento', 'action']
  id: any

  constructor(private usuarioService: UsuarioService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.usuarioService.findAll()
      .subscribe(usuarios => {
        this.usuarios = usuarios
      })
  }
  
}