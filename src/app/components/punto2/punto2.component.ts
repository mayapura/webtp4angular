import { Component, OnInit } from '@angular/core';
import { Palabra } from 'src/app/models/palabra';

@Component({
  selector: 'app-punto2',
  templateUrl: './punto2.component.html',
  styleUrls: ['./punto2.component.css']
})
export class Punto2Component implements OnInit {
  palabras: Array<Palabra> = [];
  indice: number = 0;
  palabra: Palabra = new Palabra(0,"");
  palabraOculta: String = "";
  letras: Array<String> = [];
  letra: String = "";
  cantLetras: number = 0;
  cantidad: number = 0;
  errores: number = 0;
  aciertos: number = 0;
  oportunidades: number = 9;
  imagenes: Array<String> =[];
  imagen: String = "";
  estadobtn: boolean = false;
  letrasdigitadas: Array<String> = [];
  indiceletras: number = 0;
  mensaje: String = "";

  
  constructor() { 
    this.palabras = new Array<Palabra>();
    this.palabras.push(new Palabra(1, "GATO"));
    this.palabras.push(new Palabra(2, "VACA"));
    this.palabras.push(new Palabra(3, "CONEJO"));
    this.palabras.push(new Palabra(4, "CABALLO"));
    this.palabras.push(new Palabra(5, "TIGRE"));
    this.palabras.push(new Palabra(6, "GALLINA"));
    this.palabras.push(new Palabra(7, "PERRO"));
    this.palabras.push(new Palabra(8, "COBALLO"));
    this.palabras.push(new Palabra(9, "SERPIENTE"));
    this.palabras.push(new Palabra(10, "MURCIELAGO"));
    
    this.letras = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

    this.imagenes = ["ahorcadito.png","ahorcadito00.png","ahorcadito01.png","ahorcadito02.png","ahorcadito03.png","ahorcadito04.png","ahorcadito05.png","ahorcadito06.png","ahorcadito07.png","ahorcadito08.png","ahorcadito09.png"];

    this.iniciar();

    this.determinarPalabraOculta(); 
  }

  iniciar() {
    this.indice = this.determinarNumerosAleatorios(this.palabras.length-1, 0);
    this.palabra = this.palabras[this.indice];
    console.log("PALABRA ALEATORIA: " + this.palabra.palabra + " / INDICE: "+this.indice);
    console.log("CANT VECT: " + this.palabras.length);
    this.imagen = this.imagenes[0];
    this.estadobtn=false;
    this.errores=0;
    this.oportunidades=9;
    this.aciertos=0;
    this.determinarPalabraOculta();
    this.mensaje="";
  }
  
  determinarNumerosAleatorios(max: number, min: number) {
    let valor: number;
    valor = Math.floor(Math.random() * (max - min) + 0) + min;
    return valor;
  }

  determinarPalabraOculta(){
    this.palabraOculta="";
    this.cantLetras = this.palabra.palabra.length;
    for(let i=0; i < this.cantLetras; i++){
      this.palabraOculta += "_ ";
    }
  }
/* VER COMO DESABILITAR LOS BOTONES DEL TECLADO*/
  compararLetras(letra:String){
    let band: boolean = false;
    let band2: boolean = false;
    let pOculta= this.palabraOculta.split('');
    for(let f=0;f<this.letrasdigitadas.length;f++){
      if(this.letrasdigitadas[f]==letra){
        band2=true;
      }else{
        this.letrasdigitadas[this.letrasdigitadas.length]=letra;
      }
    }
    if(band2==!true){
    for(let i=0; i < this.cantLetras; i++){
      if(this.palabra.palabra.charAt(i) == letra){
        pOculta[i*2]=letra.charAt(0);
        band=true;
      }
    }
 /*    this.letrasdigitadas[this.indiceletras]=letra; */
    this.indiceletras++;/* provar como seguir */
    this.controlarContadores(band);
    this.mostrarVistapalabraOculta(pOculta);
    this.definirPartida();
    }else{
      console.log("ESTA LETRA YA FUE INGRESADA...");
    }
  }


  controlarContadores(band: boolean){
    console.log("band1: "+band);
     if(band==true){
      this.aciertos++;
    }else if(band==false && this.oportunidades>0){
      this.errores++;
      this.oportunidades--;
      this.imagen = this.imagenes[this.errores];
    }
     
  }

  mostrarVistapalabraOculta(pOculta: string[]){
    console.log("OPORTUNIDADES: "+ this.oportunidades);
    console.log("ERRORES: "+ this.errores);
    console.log("ACIERTOS: "+ this.aciertos);
    this.palabraOculta="";
    console.log("PALABRA OCULTA: "+this.palabraOculta);
    console.log("CONTENIDO DE POCULTA: "+pOculta[0]);
    console.log("CONTENIDO DE POCULTA: "+pOculta[2]);
    console.log("CONTENIDO DE POCULTA: "+pOculta[4]);
    
    for(let l=0; l < pOculta.length; l++){
      this.palabraOculta+=pOculta[l];
    }
    console.log("PALABRA OCULTA DESPUES DEL FOR: "+this.palabraOculta);
  }

  definirPartida(){
    if(this.palabraOculta.indexOf("_")==-1){
      console.log("FELICIDADES GANASTE!! TU ERES GENIAL :)");
      this.mensaje = "FELICIDADES GANASTE!!";
      this.imagen = this.imagenes[10];
      this.estadobtn = true;
    }else if(this.errores==9){
      console.log("PERDISTE!!! TU ME DECEPCIONAS :(");
      this.mensaje="PERDISTE!!!";
      this.estadobtn = true;
    }
  }


  ngOnInit(): void {
  }

}
