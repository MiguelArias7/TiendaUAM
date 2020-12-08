import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsAndSalesService {

  constructor() { }

  private news : New[] = 
  [
    {
      name:"Rebaja 1",
      img:"./assets/images/test_files/test.jpg"
    },
    {
      name:"Rebaja 2",
      img:"./assets/images/test_files/test2.jpg"
    },
    {
      name:"Rebaja 3",
      img:"./assets/images/test_files/test3.jpg"
    },
    {
      name:"Rebaja 4",
      img:"./assets/images/test_files/test4.jpg"
    }
  ]

  public getNews()
  {
    return this.news;
  }
}

export interface New
{
  name: string;
  img: string;
}
