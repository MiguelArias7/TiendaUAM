import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarServiceService } from 'src/app/services/car-service.service';
import { CategoriaEspecificaService } from 'src/app/services/categoria-especifica.service';
import { jacketsService } from 'src/app/services/jackets.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
      item:any={};
      products: any[];
      
  constructor(private activatedRoute:ActivatedRoute,private _especificCategoriesServices: CategoriaEspecificaService,
   private _shoppingCarService: CarServiceService) {

    this.activatedRoute.params.subscribe(params=>{

      this.item=this._especificCategoriesServices.pedirItem(params['id']);
    });

   }

  ngOnInit(): void {
    this.products=this._shoppingCarService.getProducts();
  }
  
  agregarItem(item:any){
    if (this.products.length==0) {
      this._shoppingCarService.add(item);
            console.log(this.products.length+"");
    } else {
      for (const producto in this.products) {
        if(JSON.stringify(item) === JSON.stringify(producto)){
         
          return;
        }
       
        else{
          
          this._shoppingCarService.add(item);
          console.log("producto agregado");
          return;
        }
      
    }
    }
    
    
    
  }

}
