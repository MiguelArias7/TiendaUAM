import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import { EspecificCategoriesService, Item } from 'src/app/services/especific-categories.service';

@Component({
  selector: 'app-especific-categories',
  templateUrl: './especific-categories.component.html',
  styleUrls: ['./especific-categories.component.css']
})
export class EspecificCategoriesComponent implements OnInit {
      items: Item[]=[];
  constructor(private _especificCategoriesServices: EspecificCategoriesService, private router:Router) { }

  ngOnInit(): void {
    this.items=this._especificCategoriesServices.getChaquetas();
  }
   
  verChaqueta(index:number){
    this.router.navigate(['Item',index]);
  }
}
