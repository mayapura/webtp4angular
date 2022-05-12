export class Pasaje {
    idPasajero!:number;
    dniPasajero!: number;
    precio!: number;
    categoriaPasajero!:string; 
    fechaCompra!: Date;

    pasaje(idPasajero: number, dniPasajero: number, precio: number,categoriaPasajero:string,fechaCompra: Date){
        this.idPasajero = idPasajero;
        this.dniPasajero = dniPasajero;
        this.precio = precio;
        this.categoriaPasajero = categoriaPasajero;
        this.fechaCompra = fechaCompra;
    }

}
