import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { EspecificCategoriesComponent } from './components/especific-categories/especific-categories.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'especific-categories', component: EspecificCategoriesComponent},
    { path: 'framework/:id', component: HomeComponent }, //Cambiar esto por componente de category individual
    { path: 'about', component: AboutComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];

export const appRouting = RouterModule.forRoot(routes);