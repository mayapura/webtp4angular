import { Injectable } from '@angular/core';
import { Pasaje } from '../models/pasaje';

@Injectable({
  providedIn: 'root'
})
export class PasajeService {
  ventas:Array<Pasaje>;

  constructor() { 
    this.ventas = new Array<Pasaje>();
  }

  listarVentas(){
    return this.ventas;
  }

  saveVenta(venta:Pasaje){
    venta.idPasajero = this.getDisponible();
    this.ventas.push(venta);
  }


  getDisponible(){
    var maxid:number;
    maxid = 0;
    for(var i=0;i<this.ventas.length;i++){
      if(maxid<this.ventas[i].idPasajero){
        maxid =this.ventas[i].idPasajero;
      }
    }
    return (maxid +1);
  }

  getVenta(id:number):Pasaje{
    let venta:Pasaje=new Pasaje();
    let indexVenta:number=this.ventas.findIndex(vta => (vta.idPasajero == id));
    venta=this.ventas[indexVenta];
    return venta;
  }

  updateVenta(venta: Pasaje):void{
    let indexVenta:number = venta.idPasajero;
    this.ventas[indexVenta] = venta;
  }

  deleteVenta(venta:Pasaje):void{
    

  }
  




}
