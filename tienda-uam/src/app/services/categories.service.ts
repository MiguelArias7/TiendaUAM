import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor() { }

    private categories : category[] = 
    [
      {
          name: "Angular",
          img: "./assets/images/test2.jpg",
      },
      {
          name: "React",
          img: "./assets/images/test2.jpg",
      },
      {
          name: "Vue",
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

}

export interface category
{
    name: string;    
    img: string;
}