import { Component, OnInit } from '@angular/core';
import { Pasaje } from '../../models/pasaje';
import { PasajeService } from '../../services/pasaje.service';

@Component({
  selector: 'app-punto3',
  templateUrl: './punto3.component.html',
  styleUrls: ['./punto3.component.css']
})
export class Punto3Component implements OnInit {
  venta:Pasaje = new Pasaje;
  ventas:Array<Pasaje>;
  precioActual:number = 0;
  precioDescuento:number = 0;
  mostrar:boolean = false;
  menor:number = 0;
  adulto: number =0;
  jubilado:number =0;

  constructor(private pasajeservice:PasajeService) {
    this.venta = new Pasaje();
    this.ventas =new Array<Pasaje>();
    this.listarVentas();
   }

   ngOnInit(): void {
  }

  /* Metodo que guarda ventas */
  saveVenta(){
    this.venta.fechaCompra=new Date();
    this.venta.precio=this.precioActual;
    this.pasajeservice.saveVenta(this.venta);
    this.venta=new Pasaje();
    this.mostrar=false;
    this.precioActual=0;
    this.precioDescuento=0;
  }

  /* Metodo que lista ventas */
  
   listarVentas(){
     this.ventas=this.pasajeservice.listarVentas();
   }

/* Metodo que limpia ventas */
   limpiarVentas(){
     this.venta=new Pasaje();
   }

   /* Metodo que calcula el descuento */

   calcularDescuento(){
     if(this.venta.categoriaPasajero=="m"){
       this.precioDescuento=(this.venta.precio*25)/100;
       this.precioActual=this.venta.precio-this.precioDescuento;
       this.mostrar=true;
       this.menor = this.menor+1;
     }
     
     if(this.venta.categoriaPasajero=="j"){
       this.precioDescuento=(this.venta.precio*50)/100;
       this.precioActual=this.venta.precio-this.precioDescuento;
       this.mostrar=true;
       this.jubilado =this.jubilado+1;
     }

     if(this.venta.categoriaPasajero=="a"){
       this.mostrar=false;
       this.adulto = this.adulto+1;
     }

   }


   editVenta(pasaje: Pasaje): void{
/*       this.router.navigate(["....",pasaje.idPasajero]) */
   } 

   deleteVenta(pasaje: Pasaje):void{
      this.pasajeservice.deleteVenta(pasaje);
   } 


}
