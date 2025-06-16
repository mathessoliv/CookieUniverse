import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Cesta } from './model/cesta';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CookieUniverse';
  hideHeader = false;
  filtro: string = '';
  cesta: Cesta = new Cesta();

  constructor(private router: Router) {
    let json = localStorage.getItem('cesta');
    
    if (json != null) {
      this.cesta = JSON.parse(json);
    }    // Escutar mudanças de rota para mostrar/esconder header
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.checkRouteForHeader(event.url);
      this.updateCesta(); // Atualizar cesta quando mudar de rota
    });

    // Verificar rota inicial
    this.checkRouteForHeader(this.router.url);
  }

  private checkRouteForHeader(url: string) {
    // Esconder header nas rotas de login e cadastro
    const hiddenRoutes = ['/', '/login', '/cadastro'];
    this.hideHeader = hiddenRoutes.includes(url);
  }

  private updateCesta() {
    // Atualizar cesta do localStorage
    let json = localStorage.getItem('cesta');
    if (json != null) {
      this.cesta = JSON.parse(json);
    }
  }

  verCarrinho() {
    location.href = '/cesta';
  }

  verPerfil() {
    location.href = '/perfil';
  }
  sair() {
    // Limpar dados do usuário logado
    localStorage.removeItem('clienteLogado');
    localStorage.removeItem('cesta');
    location.href = '/login';
  }

  fazerBusca() {
    localStorage.setItem('filtro', this.filtro);
    location.href = '/home'
  }
}
