import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario.model';

@Component({
  selector: 'app-usuario-read',
  templateUrl: './usuario-read.component.html',
  styleUrls: ['./usuario-read.component.css']
})
export class UsuarioReadComponent implements OnInit {

  usuarios!: Usuario[];
  displayedColumns = ['nome', 'email', 'cpf', 'telefone', 'nascimento', 'action']

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.findAll()
      .subscribe(usuarios => {
        this.usuarios = usuarios
      })
  }

}