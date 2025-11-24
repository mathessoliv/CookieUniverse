import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { CestaComponent } from './cesta/cesta.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'detalhes', component: DetalheComponent },
  { path: 'cesta', component: CestaComponent},
  { path: 'perfil', component: PerfilComponent},
  { path: 'fale-conosco', component: FaleConoscoComponent}
];
