import { Injectable } from '@angular/core';
import { jacketsService, Item} from 'src/app/services/jackets.service';
import { GorrosService } from './gorros.service';
import { SombrillasService } from './sombrillas.service';
import { TazasService } from './tazas.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriaEspecificaService {
  
  items: Item[]=[];
  constructor(private jacket : jacketsService, private sombrilla : SombrillasService, private taza : TazasService,
              private gorro : GorrosService) { 
    console.log();
    
  }
  pedirChaquetas(){
   return this.jacket.getChaquetas()
  }
  pedirSombrillas(){
    return this.sombrilla.getSombrillas();
  }
  pedirTazas(){
    return this.taza.getTazas();
  }
  pedirGorros(){
    return this.gorro.getGorros();
  }
  pedirCategoria(index){
    console.log(index, "indice");
    
    switch(index) { 
      
      case '0': 
        console.log("aca");
        this.items=this.pedirChaquetas();
         break; 
       
      case '1': 
         this.items=this.pedirSombrillas(); 
         break; 
         case '2':
           this.items=this.pedirGorros();
           break;
      case '3':
        this.items=this.pedirTazas();
        break;
      default:
       console.log ("entre");
       break;
     
   }
   return this.items; 
}
pedirItem(i){
  return this.items[i];
}
}


