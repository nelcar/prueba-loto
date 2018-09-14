import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VacacionesService } from '../../services/vacaciones.service';
import { Vacaciones } from '../../interface/vaciones';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
   vacaciones:Vacaciones[] = [];

  constructor(private _vacacionesService:VacacionesService, private router:Router) {
    this._vacacionesService.getUsuarios().subscribe(data=>{
      for(let i in data){
        let tmp:Vacaciones = data[i];
        tmp.key$ = i;
        this.vacaciones.push(tmp);
      }
      console.log(this.vacaciones);
    })
   }

  ngOnInit() {
  }

  ver(tmp:Vacaciones){
    this.router.navigate(['ver',tmp.key$]);
  }

  eliminar(tmp:Vacaciones){
    this._vacacionesService.eliminarUsuario(tmp.key$).subscribe(data=>{
      location.reload();
    });

  }

  editar(tmp:Vacaciones){
    this.router.navigate(['editar',tmp.key$]);
  }

  regresar(){
    this.router.navigate(['home']);
  }

}
