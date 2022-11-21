import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { ApiCubosService } from 'src/app/services/apicubos.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  public usuario!: Usuario;

  constructor(private _service: ApiCubosService) { }

  ngOnInit(): void {
    this._service.getPerfil().subscribe(response => {
      this.usuario = response;
    });
  }

}
