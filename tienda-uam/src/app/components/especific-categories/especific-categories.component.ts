import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriaEspecificaService } from 'src/app/services/categoria-especifica.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { jacketsService, Item } from 'src/app/services/jackets.service';

@Component({
  selector: 'app-especific-categories',
  templateUrl: './especific-categories.component.html',
  styleUrls: ['./especific-categories.component.css']
})
export class EspecificCategoriesComponent implements OnInit {
      items: Item[]=[];
      
  constructor(private activatedRoute:ActivatedRoute,private _especificCategoriesServices: CategoriaEspecificaService, private router:Router) {
    this.activatedRoute.params.subscribe(params=>{

      this.items=this._especificCategoriesServices.pedirCategoria(params['id']);
    });
    console.log(this.items);
   }

  ngOnInit(): void {
    
  }
   
  verItem(index:number){
    this.router.navigate(['Item',index]);
  }
}
