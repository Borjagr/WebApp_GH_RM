import { Routes } from '@angular/router';
import { Ejercicio1 } from './views/ejercicio1/ejercicio1';
import { Ejercicio2 } from './views/ejercicio2/ejercicio2';

export const routes: Routes = [
    {path: '', redirectTo: 'ejercicio1', pathMatch: 'full' },
    {path: 'ejercicio1', component: Ejercicio1 },
    {path: 'ejercicio2', component: Ejercicio2 },
];
