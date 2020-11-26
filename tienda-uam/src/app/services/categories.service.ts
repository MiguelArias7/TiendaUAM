import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

    private categories : Category[] = 
    [
      {
          name: "Chaquetas",
          img: "./assets/images/chaquetas.jfif",
      },
      {
          name: "Chaquetas",
          img: "./assets/images/chaquetas.jfif",
      },
      {
          name: "Chaquetas",
          img: "./assets/images/chaquetas.jfif",
      },
      {
          name: "Chaquetas",
          img: "./assets/images/chaquetas.jfif",
      },
      {
          name: "Chaquetasl",
          img: "./assets/images/chaquetas.jfif",
      },
      {
          name: "Chaquetas",
          img: "./assets/images/chaquetas.jfif",
      },
      {
          name: "Chaquetas",
          img: "./assets/images/chaquetas.jfif",
      },
      {
          name: "Chaquetas",
          img: "./assets/images/chaquetas.jfif",
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