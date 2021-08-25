import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Veiculo } from 'src/app/models/veiculo.model';
import { VeiculoService } from 'src/app/services/veiculo.service';

@Component({
  selector: 'app-veiculo-cliente-delete',
  templateUrl: './veiculo-cliente-delete.component.html',
  styleUrls: ['./veiculo-cliente-delete.component.css']
})
export class VeiculoClienteDeleteComponent implements OnInit {

  id: any
  veiculo!: Veiculo

  constructor(private veiculoService: VeiculoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id")
    this.veiculoService.findById(this.id)
      .subscribe(veiculo => {
        this.veiculo = veiculo
        console.log(this.veiculo)
      })
  }

  deleteVeiculo() : void {
    this.veiculoService.delete(this.id)
      .subscribe(() => {
        this.veiculoService.showMessage("Veículo deletado com sucesso!");
        this.router.navigate([`/usuarios`]);
      })
  }

  cancel(): void {
    this.router.navigate([`/usuarios`]);
  }

}
