export class Noticia {
    id:number;
    titulo:string;
    noticia:string;
    img:string;

    constructor(id:number, titulo:string, noticia:string, img:string){
        this.id = id;
        this.titulo = titulo;
        this.noticia = noticia;
        this.img = img;
    }
}
