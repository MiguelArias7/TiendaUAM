import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarServiceService } from 'src/app/services/car-service.service';
import { EspecificCategoriesService } from 'src/app/services/especific-categories.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
      item:any={};
      products: any[];
      
  constructor(private activatedRoute:ActivatedRoute,private _especificCategoriesServices: EspecificCategoriesService,
   private _shoppingCarService: CarServiceService) {

    this.activatedRoute.params.subscribe(params=>{

      this.item=this._especificCategoriesServices.getChaqueta(params['id']);
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
