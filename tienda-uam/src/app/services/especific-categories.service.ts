import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EspecificCategoriesService {
  private especificCategories: Item[]=[

    {
      img:"assets/images/imgChaquetas/C-001.jfif",
      name:"chaqueta con capota",
      ref:"C-001",
      description:"hecho en algodon ",
      precio:"1200"

     },
     {
      img:"assets/images/imgChaquetas/C-002.jfif",
      name:"chaqueta sin capota",
      ref:"C-002",
      description:"hecho en algodon ",
      precio:"1200"
     },
     {
      img:"assets/images/imgChaquetas/C-003.jfif",
      name:"chaqueta tipo baseball",
      ref:"C-003",
      description:"hecho en algodon ",
      precio:"1200"

     },
     {
         img:"assets/images/imgChaquetas/C-004.jfif",
         name:"saco clasico",
         ref:"C-004",
         description:"hecho en algodon ",
         precio:"1200"
 
        },
        {
         img:"assets/images/imgChaquetas/C-005.jfif",
         name:"buso tipo americano",
         ref:"C-005",
         description:"hecho en algodon ",
         precio:"1200"  
        },
        {
         img:"assets/images/imgChaquetas/C-006.jfif",
         name:"buso sin bolsillos y logo grande",
         ref:"C-006",
         description:"hecho en algodon ",
         precio:"1200"
 
        }

      ];

      
  public getChaquetas(){
    return this.especificCategories;
  }
  public getChaqueta(index:string){
    return this.especificCategories[index];
  }
  constructor() { }
}
export interface Item{

    img:string;
    name:string;
    ref:string;
    description:string;
    precio:string;
   
   }