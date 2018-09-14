import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Vacaciones, Elemento } from '../../interface/vaciones';
import { VacacionesService } from '../../services/vacaciones.service';

@Component({
  selector: 'app-ver',
  templateUrl: './ver.component.html',
  styleUrls: ['./ver.component.css']
})
export class VerComponent implements OnInit {

  id:string = "";

  vacaciones:Vacaciones = {
    titulo:"",
    solicitante:"",
    lista:[],
    fechaI:""
  }

  elemento:Elemento = {
    fechaV:"",
    lugar:""
  }


  constructor(private router:Router, private active:ActivatedRoute, private _vacacionesService:VacacionesService) {
    this.active.params.subscribe(parametros=>{
      this.id = parametros['id'];
      this._vacacionesService.getUsuario(this.id).subscribe(data=>{
        this.vacaciones = data;

        console.log(this.id);
        console.log(this.vacaciones);
      });
    });
  }

  ngOnInit() {
  }

  Regresar(){
    this.router.navigate(['home']);
  }

  editar(){
    this.router.navigate(['editar',this.id]);
  }



}
