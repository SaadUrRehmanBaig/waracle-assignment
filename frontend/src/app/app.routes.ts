import { Routes } from '@angular/router';
import { ListCakesComponent } from './pages/list-cakes/list-cakes.component';
import { CreateCakesComponent } from './pages/create-cakes/create-cakes.component';
import { EditCakesComponent } from './pages/edit-cakes/edit-cakes.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/list-cakes',
        pathMatch: 'full',
        
    },
    {
        path: 'list-cakes',
        component: ListCakesComponent
    },
    {
        path: 'create-cakes',
        component: CreateCakesComponent
    },
    {
        path: 'edit-cakes/:id',
        component: EditCakesComponent
    },
    {
        path: '**',
        redirectTo: '/list-cakes'
    }
];
