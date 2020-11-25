import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', pathMatch:'full', redirectTo: 'routePath' }
];

export const appRouting = RouterModule.forRoot(routes);