import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Cesta } from '../model/cesta';
import { Bolacha } from '../model/bolacha';

@Component({
  selector: 'app-cesta',
  imports: [CommonModule],
  templateUrl: './cesta.component.html',
  styleUrl: './cesta.component.css'
})
export class CestaComponent {
  cesta : Cesta = new Cesta();
  mensagem: string = '';

  constructor() {
    let json = localStorage.getItem('cesta');
    
    if (json == null) {
      this.mensagem = 'Sua cesta está vazia';
    } else {
      this.cesta = JSON.parse(json);
    }
  }

  limparCesta() {
    localStorage.removeItem('cesta');
    this.cesta = new Cesta();
    this.mensagem = 'Sua cesta foi limpa com sucesso!';
  }

  continuarCompra(){
    location.href = '/home';
  }

  removerItem(item:number) {
    this.cesta.itens.splice(item, 1);
    localStorage.setItem('cesta', JSON.stringify(this.cesta));
  }

  detalhes(bolacha: Bolacha) {
    localStorage.setItem("bolacha", JSON.stringify(bolacha));
    location.href = "detalhes";
  }
}
