import { CommonModule } from '@angular/common';
import { Bolacha } from '../model/bolacha';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public mensagem: string = "";
  public bolachas: Bolacha[] = [
    { codigo: 1,
      nome:"Oreo tradicional",
      valor:3.99,
      descricao: "Biscoito recheado de chocolate 90g",
      keywords: ["biscoito", "tradicional", "oreo"],
      categoria: "Oreo",
      quantidade: 0
    },

    { codigo: 2,
      nome:"Oreo sabor morango",
      valor:3.99,
      descricao: "Biscoito recheado de morango 90g",
      keywords: ["biscoito", "morango", "oreo"],
      categoria: "Oreo",
      quantidade: 0
    },

    { codigo: 3,
      nome:"Oreo sabor chocolate",
      valor:3.99,
      descricao: "Biscoito recheado de chocolate 90g",
      keywords: ["biscoito", "chocolate", "oreo"],
      categoria: "Oreo",
      quantidade: 0
    },
    
    {
      codigo: 4,
      nome: "Oreo sabor limão",
      valor: 3.99,
      descricao: "Biscoito recheado de limão 90g",
      keywords: ["biscoito", "limão", "oreo"],
      categoria: "Oreo",
      quantidade: 0
    }
  ];
}
