import { Injectable } from '@angular/core';
import { Pasaje } from '../models/pasaje';

@Injectable({
  providedIn: 'root'
})
export class PasajeService {
  pasajes:Array<any>;

  constructor() { 
    this.pasajes = new Array<Pasaje>();
      this.pasajes = [
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
    ]
  }

  getPasajes(){
    return this.pasajes;
  }

  addPasaje(pasaje:Pasaje){
    pasaje.idPasajero = this.getDisponible();
    this.pasajes.push(pasaje);
  }


  getDisponible(){
    var maxid:number;
    maxid = 0;
    for(var i=0;i<this.pasajes.length;i++){
      if(maxid<this.pasajes[i].idPasajero){
        maxid =this.pasajes[i].idPasajero;
      }
    }
    return (maxid +1);
  }

  getPasaje(id:number):Pasaje{
    let pasaje:Pasaje=new Pasaje();
    let indexPasaje:number=this.pasajes.findIndex(pje => (pje.idPasajero == id));
    pasaje=this.pasajes[indexPasaje];
    return pasaje;
  }

  updatePasaje(pasaje: Pasaje):void{
    let indexPasaje:number = pasaje.idPasajero;
    this.pasajes[indexPasaje-1] = pasaje;
  }

  deletePasaje(pasaje:Pasaje):void{
    for(var i=0; i < this.pasajes.length; i++){
       console.log(this.pasajes[i]);
      if(this.pasajes[i].idPasajero == pasaje.idPasajero)
      {  
        this.pasajes.splice(i,1);
      }
    }
  }
  
}