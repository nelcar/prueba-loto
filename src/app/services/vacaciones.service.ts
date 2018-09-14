import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Vacaciones } from '../interface/vaciones';

import 'rxjs/Rx';

@Injectable()
export class VacacionesService {

  fireUrl = "https://prueba-loto.firebaseio.com/vacaciones.json";
  fireUrlUsuario = "https://prueba-loto.firebaseio.com/vacaciones";

  constructor(private http:Http) {
  }

  nuevoUsuario ( usuario:Vacaciones ){
    let body = JSON.stringify(usuario);

    return this.http.post(this.fireUrl, body)
      .map(res => {
        return res.json();
      });
  }

  getUsuarios ( ){
    return this.http.get( this.fireUrl )
      .map(res => {
        return res.json();
      });
  }

  getUsuario ( key$:string ){
    let url = `${this.fireUrlUsuario }/${key$}.json`;
    return this.http.get(url)
      .map(res => {
        return res.json();
      });
  }

  eliminarUsuario ( key$:string ){
    let url = `${this.fireUrlUsuario }/${key$}.json`;

    return this.http.delete(url).map(res => {
      return res.json();
    })
  }

  actualizarUsuario ( usuario:Vacaciones, key$:string ) {
    let body = JSON.stringify(usuario);

    let headers = new Headers ({
      'Content-Type':'application/json'
    });

    let url = `${this.fireUrlUsuario }/${key$}.json`;


    return this.http.put( url, body, {headers})
      .map(res => {
        return res.json();
      });
  }

}
