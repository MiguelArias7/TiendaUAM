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
      img:"./assets/images/test_files/test.png"
    },
    {
      name:"Rebaja 2",
      img:"./assets/images/test_files/test2.png"
    },
    {
      name:"Rebaja 3",
      img:"./assets/images/test_files/test3.png"
    },
    {
      name:"Rebaja 4",
      img:"./assets/images/test_files/test4.png"
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
