import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { AboutComponent } from './components/about/about.component';
import { appRouting } from './app.routes';
//Componentes
import { HomeComponent } from './components/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardGroupComponent } from './components/card-group/card-group.component';
//Servicios
import { CategoriesService } from './services/categories.service';
import { FooterComponent } from './components/footer/footer.component';
import { EspecificCategoriesComponent } from './components/especific-categories/especific-categories.component';
import { ItemComponent } from './components/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    AboutComponent,
    HomeComponent,
    CarouselComponent,
    CardGroupComponent,
    FooterComponent,
    EspecificCategoriesComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [
    CategoriesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
