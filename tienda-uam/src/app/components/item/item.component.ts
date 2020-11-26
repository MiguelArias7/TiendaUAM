import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EspecificCategoriesService } from 'src/app/services/especific-categories.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
      item:any={};
  constructor(private activatedRoute:ActivatedRoute,private _especificCategoriesServices: EspecificCategoriesService) {

    this.activatedRoute.params.subscribe(params=>{

      this.item=this._especificCategoriesServices.getChaqueta(params['id']);
    });

   }

  ngOnInit(): void {
  }

}
