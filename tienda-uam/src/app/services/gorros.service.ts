import { Injectable } from '@angular/core';
import { Item } from './jackets.service';

@Injectable({
  providedIn: 'root'
})
export class GorrosService {

  private gorros: Item[]=[

    {
      img:"assets/images/imgGorros/amarillo.jpg",
      name:"gorro amarillo",
      ref:"G-001",
      description:"hecho en algodon ",
      precio:"1200"

     },
     {
      img:"assets/images/imgGorros/azul.jpg",
      name:"gorro azul",
      ref:"G-002",
      description:"hecho en algodon ",
      precio:"1200"

     },
     {
      img:"assets/images/imgGorros/rosa.jpg",
      name:"gorro rosa",
      ref:"G-003",
      description:"hecho en algodon ",
      precio:"1200"

     },
     {
      img:"assets/images/imgGorros/naranja.jpg",
      name:"gorro naranja",
      ref:"G-004",
      description:"hecho en algodon ",
      precio:"1200"

     },
     {
      img:"assets/images/imgGorros/verde.jpg",
      name:"gorro verde",
      ref:"G-005",
      description:"hecho en algodon ",
      precio:"1200"

     },
     {
      img:"assets/images/imgGorros/rojo.jpg",
      name:"gorro rojo",
      ref:"G-006",
      description:"hecho en algodon ",
      precio:"1200"

     },
      ];

      
  public getGorros(){
    return this.gorros;
  }
  public getGorro(index:string){
    return this.gorros[index];
  }
  constructor() { }
}
