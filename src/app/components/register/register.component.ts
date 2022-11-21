import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCubosService } from 'src/app/services/apicubos.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild("cajaname") cajaName!: ElementRef;
  @ViewChild("cajamail") cajaMail!: ElementRef;
  @ViewChild("cajapassword") cajaPassword!: ElementRef;

  constructor(private _service: ApiCubosService, private _router: Router) { }

  ngOnInit(): void {
  }

  register() {
    var name = this.cajaName.nativeElement.value;
    var user = this.cajaMail.nativeElement.value;
    var password = this.cajaPassword.nativeElement.value;
    
    var usuario = {
      idUsuario: 0,
      nombre: name,
      email: user,
      pass: password
    }

    var login = {
      email: user,
      password: password,
    }

    console.log(usuario);

    this._service.register(usuario).subscribe(response => {
      this._service.login(login).subscribe(response => {
        console.log(response.response);
        var tokken = response.response;
        localStorage.setItem("autho", tokken);
        this._router.navigate(["/"]);
      });
    })

  }

}
