import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cubo } from 'src/app/models/cubo';
import { ApiCubosService } from 'src/app/services/apicubos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public cubos!: Array<Cubo>;


  constructor(private _service: ApiCubosService, private _router:Router) { }

  ngOnInit(): void {
    this.loadCubos();
  }

  loadCubos() {
    this._service.getCubos().subscribe(response =>{
      this.cubos = response;
    });
  }

}
