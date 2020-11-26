import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { AboutComponent } from './components/about/about.component';
import { appRouting } from './app.routes';
import { HomeComponent } from './components/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardGroupComponent } from './components/card-group/card-group.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    AboutComponent,
    HomeComponent,
    CarouselComponent,
    CardGroupComponent
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
