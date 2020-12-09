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
          name: "Sombrillas",
          img: "./assets/images/imgSombrillas/categoria.jpg",
      },
      {
          name: "Gorros",
          img: "./assets/images/imgGorros/categoria.jpg",
      },
      {
          name: "Tazas",
          img: "./assets/images/imgTazas/categoria.jpg",
      },
      {
          name: "Termos",
          img: "./assets/images/termos.jpg",
      },
  
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