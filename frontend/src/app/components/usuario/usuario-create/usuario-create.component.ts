import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario.model';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {

  usuario: Usuario = {
    nome: '',
    email: '',
    cpf: '',
    telefone: '',
    nascimento: ''
  }

  constructor(private usuarioService: UsuarioService, private router: Router) { }

  ngOnInit(): void {
    
  }

  insertUser() : void {
    this.usuarioService.insert(this.usuario)
      .subscribe(() => {
        this.usuarioService.showMessage('Operação realizada com sucesso!')
        this.router.navigate(['/usuarios'])
      })    
  }

  cancel() : void {
    this.router.navigate(['/usuarios'])
  }

}
