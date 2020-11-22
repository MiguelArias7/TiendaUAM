import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: '**', pathMatch:'full', redirectTo: 'routePath' }
];

export const appRouting = RouterModule.forRoot(routes);