import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetalheComponent } from './detalhe/detalhe.component';
export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },

    {path: 'detalhes', component: DetalheComponent}
];
