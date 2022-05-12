import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia';

@Component({
  selector: 'app-punto1',
  templateUrl: './punto1.component.html',
  styleUrls: ['./punto1.component.css']
})
export class Punto1Component implements OnInit {
  noticias: Array<Noticia> = [];
  indice: number = 0;
  noticia: Noticia = new Noticia(0,"","","");

  constructor() { 
    this.noticias =new Array<Noticia>();
    this.noticias.push(new Noticia(1, "Los cursos gratuitos que permiten capacitarse para los trabajos más demandados", "La red social laboral LinkedIn armó un ranking con los perfiles más demandados y ofrece, sin costo, para adquirir los conocimientos necesarios.", "img01.jpg"));
    this.noticias.push(new Noticia(2, "Programación: los secretos de escribir código", "Se calcula que en la Argentina todos los años quedan 5000 puestos de trabajo vacantes por falta de conocimiento en esta área.", "img02.jpg"));
    this.noticias.push(new Noticia(1, "La robótica y la programación pueden solucionar los problemas más complicados", "TN Tecno habló con Nadia Mir, apasionada de la tecnología, docente y jurado en competencias de autómatas. “Las políticas educativas no comprenden las limitaciones que supone no tener conocimientos en el área”, dice.", "img03.jpg"));

    this.iniciar();
  }

  iniciar(){
    if(this.indice < this.noticias.length){
      this.noticia = this.noticias[this.indice];
    }
    
  }

  siguiente(){
    this.indice = this.indice + 1;
      if(this.indice < this.noticias.length){
        this.noticia = this.noticias[this.indice];
      }else{
        this.indice = this.noticias.length - 1;
      }

  }


  anterior(){
    this.indice = this.indice - 1;
    if (this.indice < this.noticias.length && this.indice > -1){
      this.noticia = this.noticias[this.indice]
    }else{
      this.indice = 0;
    }
  }

  ngOnInit(): void {
  }

}
