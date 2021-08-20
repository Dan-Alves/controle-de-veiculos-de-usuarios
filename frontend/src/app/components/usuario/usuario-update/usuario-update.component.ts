import { Usuario } from './../usuario.model';
import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-usuario-update',
  templateUrl: './usuario-update.component.html',
  styleUrls: ['./usuario-update.component.css']
})
export class UsuarioUpdateComponent implements OnInit {

  usuario!: Usuario;
  id: any

  constructor(private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id")
    this.usuarioService.findById(this.id)
      .subscribe(usuario => {
        this.usuario = usuario
      })
  }

  updateUsuario(usuario: Usuario): void {
    this.usuarioService.update(usuario)
      .subscribe(() => {
        this.usuarioService.showMessage("Usuário atualizado com sucesso!");
        this.router.navigate(["/usuarios"]);
      })
  }

  cancel(): void {
    this.router.navigate(["/usuarios"]);
  }

}
