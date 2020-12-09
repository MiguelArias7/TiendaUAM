import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { EspecificCategoriesComponent } from './components/especific-categories/especific-categories.component';
import { HomeComponent } from './components/home/home.component';
import { ItemComponent } from './components/item/item.component';
import { ShoppingCarComponent } from './components/shopping-car/shopping-car.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'especific-categories/:id', component: EspecificCategoriesComponent},
    { path: 'item/:id', component: ItemComponent }, 
    { path: 'about', component: AboutComponent },
    { path: 'shopping-car', component: ShoppingCarComponent},
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes);