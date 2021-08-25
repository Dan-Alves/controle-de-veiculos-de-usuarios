import { VeiculoService } from '../../../services/veiculo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Veiculo } from 'src/app/models/veiculo.model';

@Component({
  selector: 'app-veiculo-cliente-create',
  templateUrl: './veiculo-cliente-create.component.html',
  styleUrls: ['./veiculo-cliente-create.component.css']
})
export class VeiculoClienteCreateComponent implements OnInit {

  usuario_id!: any;
  veiculo: Veiculo = {
    marca: '',
    modelo: '',
    ano: ''
  }

  constructor(private veiculoService: VeiculoService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  insertVeiculo() : void {
    this.usuario_id = this.route.snapshot.paramMap.get('id');
    this.veiculoService.insert(this.veiculo, this.usuario_id)
      .subscribe(() => {
        this.veiculoService.showMessage('Operação realizada com sucesso!')
        this.router.navigate(['/usuarios'])
      })    
  }

  cancel() : void {
    this.router.navigate(['/usuarios'])
  }

}
