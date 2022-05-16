import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective, DataTablesModule } from 'angular-datatables';
import { Subject } from 'rxjs';
import { Pasaje } from '../../models/pasaje';
import { PasajeService } from '../../services/pasaje.service';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})

export class Punto3Component implements OnDestroy, OnInit {
  pasaje:Pasaje = new Pasaje;
  pasajes:Array<Pasaje>;


  /* Datatable */
  @ViewChild(DataTableDirective, {static: false})
  dtElement!:DataTableDirective;
  dtOptions: DataTables.Settings= {};
  dtTrigger: Subject<any> = new Subject<any>();
  pasajs: Array<any> =[];




  constructor(private pasajeservice:PasajeService, private router: Router) {
    /* this.pasajs = new Array<Pasaje>(); */
    this.pasajes = this.cargarPasajes();
   }

   ngOnInit(): void {
       /* Datatable */
     this.dtOptions = {
       pagingType: 'full_numbers',
       pageLength: 2,
     };
     this.precargarPasajes();
    }

  /* Datatable */

  precargarPasajes(){
    /* this.pasajs = new Array<any>(); 
    this.pasajs = [
      {
        idPasajero:1,
        dniPasajero: 35896699,
        precio: 123,
        categoriaPasajero: "a",
        fechaCompra: "2014-01-01T23:28:56.782Z"
      },
      {
        idPasajero:2,
        dniPasajero: 25765429,
        precio: 234,
        categoriaPasajero: "m",
        fechaCompra: "2015-03-01T23:28:56.782Z"
      },
      {
        idPasajero:3,
        dniPasajero: 6987482,
        precio: 413,
        categoriaPasajero: "j",
        fechaCompra: "2016-05-01T23:28:56.782Z"
      }
    ];

    this.rerender();*/
  }


  ngAfterViewInit():void{
    this.dtTrigger.next(undefined);
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  rerender():void{
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) =>{
      dtInstance.destroy();
      this.dtTrigger.next(undefined);
    });
  }



  
   cargarPasajes():Array<Pasaje>{
     let pasajesTemp : Array<Pasaje> = new Array<Pasaje>();
     pasajesTemp = this.pasajeservice.getPasajes();
     return pasajesTemp;
   }

   agregarPasaje(){
    this.router.navigate(['punto3-form', 0]);
   }

   editarPasaje(pasaje: Pasaje):void{
     this.router.navigate(['punto3-form', pasaje.idPasajero]);
   }

   borrarPasaje(pasaje: Pasaje):void{
     console.log(pasaje);
     this.pasajeservice.deletePasaje(pasaje);
     pasaje= new Pasaje();
     this.pasajes = this.cargarPasajes();
   }

}

