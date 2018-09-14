import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { NgForm } from '@angular/forms';

import { Vacaciones, Elemento } from '../../interface/vaciones';
import { VacacionesService} from '../../services/vacaciones.service';

import {IMyDpOptions} from '../../../assets/my-date-picker/index';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  listaV:Elemento[] = [];

  fechaHoy:Date = new Date();

  vacaciones:Vacaciones = {
    titulo:"",
    solicitante:"",
    lista:[],
    fechaI:this.fechaHoy.toString()
  }

  elemento:Elemento = {
    fechaV:"",
    lugar:""
  }

  success:boolean = false;

  id:string = "";

  constructor(private active:ActivatedRoute, private router:Router,private _vacacionesService:VacacionesService) {
    this.active.params.subscribe(parametros=>{
      this.id = parametros['id'];
      this._vacacionesService.getUsuario(this.id).subscribe(data=>{
        this.vacaciones = data;

        this.listaV = this.vacaciones.lista;

        console.log(this.id);
        console.log(this.vacaciones);
      });
    });
  }

  ngOnInit() {
  }

  agregar(){
    this.listaV.push(this.elemento);
    this.elemento = {
      fechaV:"",
      lugar:""
    }
  }

  guardar(forma:NgForm){
    this.vacaciones.lista = this.listaV

    this._vacacionesService.actualizarUsuario(this.vacaciones,this.id).subscribe(data=>{
      console.log("Se Agrego con Exito");
      this.router.navigate(['ver',this.id]);
    });

    this.vacaciones = {
      titulo:"",
      solicitante:"",
      lista:[],
      fechaI:""
    }

    this.elemento = {
      fechaV:"",
      lugar:""
    }

    this.listaV = [];



  }

  eliminar(i){

    let index = i;
    if (index > -1) {
      this.listaV.splice(index, 1);
    }
  }

  regresar(){
    this.router.navigate(['home']);
  }

  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
    dayLabels: {su: 'Dom', mo: 'Lun', tu: 'Mar', we: 'Mie', th: 'Jue', fr: 'Vie', sa: 'Sab'},
    monthLabels: { 1: 'Enero', 2: 'Febrero', 3: 'Marzo', 4: 'Abril', 5: 'Mayo', 6: 'Junio', 7: 'Julio', 8: 'Agosto', 9: 'Septiembre', 10: 'Octubre', 11: 'Noviembre', 12: 'Diciembre' },
    showTodayBtn:false
  };

}
