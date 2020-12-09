import { Injectable } from '@angular/core';
import { Item } from './jackets.service';

@Injectable({
  providedIn: 'root'
})
export class TazasService {

 
  private tazas: Item[]=[

    {
      img:"assets/images/imgTazas/azul.jpg",
      name:"taza azul ",
      ref:"T-001",
      description:"5 Oz",
      precio:"1000"

     }, 
     {
      img:"assets/images/imgTazas/azulBlanco.jpg",
      name:"taza azul blanca",
      ref:"T-002",
      description:"5 Oz",
      precio:"1000"

     },
     {
      img:"assets/images/imgTazas/morado.jpg",
      name:"taza morada",
      ref:"T-003",
      description:"5 Oz",
      precio:"1000"

     },
     {
      img:"assets/images/imgTazas/naranja.jpg",
      name:"taza naranja",
      ref:"T-004",
      description:"5 Oz",
      precio:"1000"

     },
     {
      img:"assets/images/imgTazas/negro.jpg",
      name:"taza negra",
      ref:"T-005",
      description:"5 Oz",
      precio:"1000"

     },
     {
      img:"assets/images/imgTazas/roja.jpg",
      name:"taza roja",
      ref:"T-006",
      description:"5 Oz",
      precio:"1000"

     },
      ];

      
  public getTazas(){
    return this.tazas;
  }
  public getTaza(index:string){
    return this.tazas[index];
  }
}
