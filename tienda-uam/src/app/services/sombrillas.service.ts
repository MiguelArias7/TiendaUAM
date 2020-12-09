import { Injectable } from '@angular/core';
import { Item } from './jackets.service';

@Injectable({
  providedIn: 'root'
})
export class SombrillasService {

  private sombrillas: Item[]=[

    {
      img:"assets/images/imgSombrillas/azul.jpg",
      name:"sombrilla azul",
      ref:"S-001",
      description:"hipermeable",
      precio:"1000"

     },
     {
      img:"assets/images/imgSombrillas/blanca.jpg",
      name:"sombrilla blanca",
      ref:"S-002",
      description:"hipermeable",
      precio:"1000"

     }, {
      img:"assets/images/imgSombrillas/negra.jpg",
      name:"sombrilla negra",
      ref:"S-003",
      description:"hipermeable",
      precio:"1000"

     }, {
      img:"assets/images/imgSombrillas/rosa.jpg",
      name:"sombrilla rosa",
      ref:"S-004",
      description:"hipermeable",
      precio:"1000"

     }, {
      img:"assets/images/imgSombrillas/roja.jpg",
      name:"sombrilla roja",
      ref:"S-005",
      description:"hipermeable",
      precio:"1000"

     }, {
      img:"assets/images/imgSombrillas/verde.jpg",
      name:"sombrilla verde",
      ref:"S-006",
      description:"hipermeable",
      precio:"1000"

     },

      ];

      
  public getSombrillas(){
    return this.sombrillas;
  }
  public getSombrilla(index:string){
    return this.sombrillas[index];
  }
  constructor() { }
}
