export interface IPersona{
    nombre:string;
    obtenerDatos():void;
}
class DatosPersona implements IPersona{
    nombre="Angular";
    obtenerDatos(){
        return this.nombre;
    }
}