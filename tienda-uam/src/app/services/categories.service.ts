import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

    private categories : Category[] = 
    [
      {
          name: "Sombrillas",
          img: "./assets/images/test2.jpg",
      },
      {
          name: "Chaquetas",
          img: "./assets/images/test2.jpg",
      },
      {
          name: "Mugs",
          img: "./assets/images/test2.jpg",
      },
      {
          name: "Svelte",
          img: "./assets/images/test2.jpg",
      },
      {
          name: "Laravel",
          img: "./assets/images/test2.jpg",
      },
      {
          name: "Spring",
          img: "./assets/images/test2.jpg",
      },
      {
          name: "Express",
          img: "./assets/images/test2.jpg",
      },
      {
          name: ".NET Core",
          img: "./assets/images/test2.jpg",
      }
  ]

  public getCategories()
  {
    return this.categories;
  }

  public getLabElement(index:string)
  {
    return this.categories[index];
  }
}

export interface Category
{
    name: string;    
    img: string;
}