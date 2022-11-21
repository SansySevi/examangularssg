import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Cubo } from 'src/app/models/cubo';
import { ApiCubosService } from 'src/app/services/apicubos.service';

@Component({
  selector: 'app-cubos-marca',
  templateUrl: './cubos-marca.component.html',
  styleUrls: ['./cubos-marca.component.css']
})
export class CubosMarcaComponent implements OnInit {
  public cubosmarca!: Array<Cubo>;

  constructor(private _service: ApiCubosService, private _activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      var marca = params['marca'];
      this.loadCubos(marca);
    })
  }

  loadCubos(marca :string) {
    this._service.getCubosMarca(marca).subscribe(response => {
      this.cubosmarca = response;
    });
  }
}
