import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Cesta } from './model/cesta';

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

  constructor() {
    let json = localStorage.getItem('cesta');
    
    if (json != null) {
      this.cesta = JSON.parse(json);
    }
  
  }

  verCarrinho() {
    location.href = '/cesta';
  }

  fazerBusca() {
    localStorage.setItem('filtro', this.filtro);
    location.href = '/home'
  }
}
