import { Veiculo } from './../veiculo.model';
import { VeiculoService } from './../veiculo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-veiculo-cliente-update',
  templateUrl: './veiculo-cliente-update.component.html',
  styleUrls: ['./veiculo-cliente-update.component.css']
})
export class VeiculoClienteUpdateComponent implements OnInit {

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

  updateVeiculo(obj: Veiculo) : void {
    this.veiculoService.update(obj)
      .subscribe(() => {
        this.veiculoService.showMessage("Veículo atualizado com sucesso!");
        this.router.navigate([`/usuarios`]);
      })
  }

  cancel(): void {
    this.router.navigate([`/usuarios`]);
  }

}
