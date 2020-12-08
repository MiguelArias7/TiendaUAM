import { Component, OnInit } from '@angular/core';
import { New, NewsAndSalesService } from '../../services/news-and-sales.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  news : New[] = [];

  constructor(private _newsService: NewsAndSalesService,
              private router:Router) { }

  ngOnInit(): void {
    this.news = this._newsService.getNews();
  }
}

