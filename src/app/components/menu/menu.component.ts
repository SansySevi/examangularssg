import { Component, OnInit } from '@angular/core';
import { ApiCubosService } from 'src/app/services/apicubos.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public marcas!: Array<string>;
  public token!: string|null;

  constructor(private _service: ApiCubosService) { }

  ngOnInit(): void {
    this.loadMarcas();
    this.token = localStorage.getItem("autho");
    console.log(this.token);
  }

  loadMarcas() {
    this._service.getMarcas().subscribe(response => {
      this.marcas = response;
    });
  }

}
