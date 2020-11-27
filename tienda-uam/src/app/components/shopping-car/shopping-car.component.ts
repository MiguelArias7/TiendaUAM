import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CarServiceService } from 'src/app/services/car-service.service';



@Component({
  selector: 'app-shopping-car',
  templateUrl: './shopping-car.component.html',
  styleUrls: ['./shopping-car.component.css']
})
export class ShoppingCarComponent implements OnInit {
  products : any[]=[];
  cantidad = 1;
  @Input() item : any;
  constructor(private _shoppingCarService: CarServiceService, 
    private router : Router) { }

  ngOnInit(): void {
    this.products = this._shoppingCarService.getProducts();
   
  }
  isEmpty(object : any){
    if (object.length===0) {
      return true;
    } else {
      return false;
    }
  }

  reducirCantidad(){
    if(this.cantidad>1)
    this.cantidad--;
    
  }
  aumentarCantidad(){
    this.cantidad++;
  }
  descartarProducto(index : number){
    this._shoppingCarService.remove(index);
  }
}
