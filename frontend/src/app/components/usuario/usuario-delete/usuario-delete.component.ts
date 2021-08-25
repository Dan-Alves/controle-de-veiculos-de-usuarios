import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-delete',
  templateUrl: './usuario-delete.component.html',
  styleUrls: ['./usuario-delete.component.css']
})
export class UsuarioDeleteComponent implements OnInit {

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

  deleteUsuario(): void {
    this.usuarioService.delete(this.id)
      .subscribe(() => {
        this.usuarioService.showMessage("Usuário deletado com sucesso!");
        this.router.navigate(["/usuarios"]);
      })
  }

  cancel(): void {
    this.router.navigate(["/usuarios"]);
  }

}
