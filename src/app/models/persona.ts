export class Persona{
    nombre:string;
    apellido:string;
    email:string;
    celular:string;
    edad:number;
   
    constructor(){
        this.nombre="";
        this.apellido="";
        this.email="";
        this.celular="";
        this.edad=0;
    }
    
    mostrarNombre(){
        console.log(this.nombre);
    }
}