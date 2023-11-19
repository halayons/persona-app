export interface Figura{
    superficie:number;
    perimetro: number;
}
class Cuadrado implements Figura{
    superficie:number;
    perimetro: number;
    constructor(private lado:number){
        this.superficie=this.calcularSuperficie();
this.perimetro=this.calcularPerimetro();    

}
calcularSuperficie():number{
    return this.lado*this.lado;
}
calcularPerimetro():number{
    return this.lado*4;
}
figura1:Figura;
cuadrado1:(new()=>Cuadrado);
}
