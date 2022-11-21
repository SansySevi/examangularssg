import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Comentario } from 'src/app/models/comentario';
import { Cubo } from 'src/app/models/cubo';
import { ApiCubosService } from 'src/app/services/apicubos.service';

@Component({
  selector: 'app-detalles-cubo',
  templateUrl: './detalles-cubo.component.html',
  styleUrls: ['./detalles-cubo.component.css']
})
export class DetallesCuboComponent implements OnInit {
  public cubo!: Cubo;
  public comentarios!: Array<Comentario>;
  public token!: string | null;
  public mensaje !: string

  constructor(private _service: ApiCubosService, private _activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      this.token = localStorage.getItem("autho");
      console.log(this.token);

      var id = params['idcubo'];
      this.loadCubo(id);
      this.loadComentarios(id);
    })
  }

  loadCubo(idCubo: string) {
    this._service.getCubo(idCubo).subscribe(response => {
      this.cubo = response;
    });
  }

  loadComentarios(idCubo: string) {
    this._service.getComentarios(idCubo).subscribe(response => {
      this.comentarios = response;
    });
  }

  realizarCompra(id: number) {
    this._service.postCompra(id).subscribe(response=> {
      console.log(response);
      this.mensaje = "Pedido realizado";
    });
  }
}
