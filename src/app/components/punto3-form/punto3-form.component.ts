import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pasaje } from '../../models/pasaje';
import { PasajeService } from 'src/app/services/pasaje.service';

@Component({
  selector: 'app-punto3-form',
  templateUrl: './punto3-form.component.html',
  styleUrls: ['./punto3-form.component.css']
})
export class Punto3FormComponent implements OnInit {
  pasaje:Pasaje = new Pasaje;
  precioActual:number = 0;
  precioDescuento:number = 0;
  mostrar:boolean = false;
  menor:number = 0;
  adulto: number =0;
  jubilado:number =0;
  accion: string = "new";

  constructor(private pasajeservice:PasajeService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.pasaje = new Pasaje();
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
       if(params['id']== "0"){
         this.accion = "new";
       }else{
         this.accion = "update";
         this.cargarPasaje(params['id']);
       }
     });
  }

    /* Metodo que guarda ventas */
    guardarPasaje(){
      this.pasaje.fechaCompra=new Date();
      this.pasaje.precio=this.precioActual;
      this.pasajeservice.addPasaje(this.pasaje);
      this.pasaje=new Pasaje();
/*       this.mostrar=false;
      this.precioActual=0;
      this.precioDescuento=0; */
      this.router.navigate(['punto3']);
    }

   limpiar(){
    this.pasaje=new Pasaje();
  }

  calcularDescuento(){
    if(this.pasaje.categoriaPasajero=="m"){
      this.precioDescuento=(this.pasaje.precio*25)/100;
      this.precioActual=this.pasaje.precio-this.precioDescuento;
      this.mostrar=true;
      this.menor = this.menor+1;
    }
    
    if(this.pasaje.categoriaPasajero=="j"){
      this.precioDescuento=(this.pasaje.precio*50)/100;
      this.precioActual=this.pasaje.precio-this.precioDescuento;
      this.mostrar=true;
      this.jubilado =this.jubilado+1;
    }

    if(this.pasaje.categoriaPasajero=="a"){
      this.mostrar=false;
      this.adulto = this.adulto+1;
    }

  }

  cargarPasaje(id: number){
    this.pasaje=this.pasajeservice.getPasaje(id);
  }

  actualizarPasaje(){
    this.pasajeservice.updatePasaje(this.pasaje);
    this.pasaje=new Pasaje();
    this.router.navigate(['punto3']);
  }

}
