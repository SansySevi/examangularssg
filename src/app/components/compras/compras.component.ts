import { Component, OnInit } from '@angular/core';
import { Compra } from 'src/app/models/compra';
import { ApiCubosService } from 'src/app/services/apicubos.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {
  public compras!: Array<Compra>;

  constructor(private _service: ApiCubosService) { }

  ngOnInit(): void {
    this.loadCompras();
  }

  loadCompras() {
    this._service.getCompras().subscribe(response =>{
      this.compras = response;
    });
  }

}
