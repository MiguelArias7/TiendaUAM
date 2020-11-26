import { Component, OnInit } from '@angular/core';
import { Category, CategoriesService } from '../../services/categories.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-group',
  templateUrl: './card-group.component.html',
  styleUrls: ['./card-group.component.css']
})
export class CardGroupComponent implements OnInit {

  categories : Category[] = [];

  constructor(private _categoriesService: CategoriesService,
              private router:Router) { }

  ngOnInit(): void {
    this.categories = this._categoriesService.getCategories();    
  }

  verCategory(index:number)
  {
    this.router.navigate(['/category',index]);
  }

}
