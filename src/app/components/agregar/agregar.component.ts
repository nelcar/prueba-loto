import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { NgForm } from '@angular/forms';

import { Vacaciones, Elemento } from '../../interface/vaciones';
import { VacacionesService} from '../../services/vacaciones.service';

import {IMyDpOptions} from '../../../assets/my-date-picker/index';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

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

  constructor(private router:Router,private _vacacionesService:VacacionesService) { }

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

    this._vacacionesService.nuevoUsuario(this.vacaciones).subscribe(data=>{
      console.log("Se Agrego con Exito");
      this.router.navigate(['ver',data.name]);
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

  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'dd.mm.yyyy',
    dayLabels: {su: 'Dom', mo: 'Lun', tu: 'Mar', we: 'Mie', th: 'Jue', fr: 'Vie', sa: 'Sab'},
    monthLabels: { 1: 'Enero', 2: 'Febrero', 3: 'Marzo', 4: 'Abril', 5: 'Mayo', 6: 'Junio', 7: 'Julio', 8: 'Agosto', 9: 'Septiembre', 10: 'Octubre', 11: 'Noviembre', 12: 'Diciembre' },
    showTodayBtn:false
  };

}
