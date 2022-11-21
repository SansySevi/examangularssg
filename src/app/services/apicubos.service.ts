import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";



@Injectable()
export class ApiCubosService {
    constructor(private _http: HttpClient){}

    login(log: Object): Observable<any> {
        var json = JSON.stringify(log);
        var header = new HttpHeaders().set("Content-Type", "application/json");
        var request = "api/Manage/Login";
        var url = environment.urlApiCubos + request;

        return this._http.post(url,json, {headers:header});
    }

    register(usuario: Object): Observable<any> {
        var json = JSON.stringify(usuario);
        var header = new HttpHeaders().set("Content-Type", "application/json");
        var request = "api/Manage/RegistroUsuario";
        var url = environment.urlApiCubos + request;

        return this._http.post(url,json, {headers:header});
    }

    getPerfil(): Observable<any> {
        var header = new HttpHeaders().set("Authorization", "bearer " + localStorage.getItem("autho"));
        
        var request = "/api/Manage/PerfilUsuario";
        var url = environment.urlApiCubos + request;

        return this._http.get(url, {headers:header});
    }

    getCompras(): Observable<any> {
        var header = new HttpHeaders().set("Authorization", "bearer " + localStorage.getItem("autho"));
        var request = "api/Compra/ComprasUsuario";
        var url = environment.urlApiCubos + request;

        return this._http.get(url, {headers:header});
    }

    postCompra(idCubo: number): Observable<any> {
        var header = new HttpHeaders().set("Authorization", "bearer " + localStorage.getItem("autho"));
        var body= "";
        var request = "/api/compra/insertarpedido/" + idCubo;
        var url = environment.urlApiCubos + request;
        console.log(url);

        return this._http.post(url, body, {headers:header});
    }

    getCubos() : Observable<any> {
        var request = "api/Cubos";
        var url = environment.urlApiCubos + request;

        return this._http.get(url);
    }

    getMarcas() : Observable<any> {
        var request = "api/Cubos/Marcas";
        var url = environment.urlApiCubos + request;

        return this._http.get(url);
    }

    getCubosMarca(marca: string): Observable<any> {
        var request = "api/Cubos/CubosMarca/" + marca;
        var url = environment.urlApiCubos + request;

        return this._http.get(url);
    }

    getCubo(idCubo: string): Observable<any> {
        var request = "api/Cubos/" + idCubo;
        var url = environment.urlApiCubos + request;

        return this._http.get(url);
    }

    getComentarios(idCubo: string): Observable<any> {
        var request = "api/ComentariosCubo/GetComentariosCubo/" + idCubo;
        var url = environment.urlApiCubos + request;

        return this._http.get(url);
    }

}