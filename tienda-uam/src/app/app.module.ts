import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { AboutComponent } from './components/about/about.component';
import { appRouting } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
