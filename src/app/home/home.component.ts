import { CommonModule } from '@angular/common';
import { Bolacha } from '../model/bolacha';
import { Component } from '@angular/core';
import { Cesta } from '../model/cesta';


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
      keywords: ["BISCOITO", "OREO", "MORANGO"],
      categoria: "Oreo",
      quantidade: 0
    },

    { codigo: 3,
      nome:"Oreo sabor chocolate",
      valor:3.99,
      descricao: "Biscoito recheado de chocolate 90g",
      keywords: ["BISCOITO", "OREO", "CHCOLATE"],
      categoria: "Oreo",
      quantidade: 0
    },
    
    {
      codigo: 4,
      nome: "Oreo sabor limão",
      valor: 3.99,
      descricao: "Biscoito recheado de limão 90g",
      keywords: ["BISCOITO",  "OREO", "LIMÃO"],
      categoria: "Oreo",
      quantidade: 0
    }
  ];

  public listaFiltrada: Bolacha[] = [];

  constructor() {
    let json = localStorage.getItem("filtro");
    if (json != null) {
        let filtro = json;

        if (filtro != "") this.fazerBusca(filtro);
    }
  }

  fazerBusca(filtro: string) {
    this.mensagem = "Pesquisa por: " + filtro;
    this.listaFiltrada = this.bolachas;
    this.bolachas = this.listaFiltrada.filter(Bolacha => Bolacha.nome.toLowerCase().includes(filtro.toLowerCase())
      );
    }

  adicionarBolacha(bolacha: Bolacha) {
    let json = localStorage.getItem("cesta");
    let cesta = new Cesta();

    if (json != null) {
      cesta = JSON.parse(json);
    } 

    cesta.itens.push(bolacha);
    cesta.total += bolacha.valor;
    cesta.quantidade += 1;
    
    localStorage.setItem("cesta", JSON.stringify(cesta));
  }

  verDetalhes(bolacha: Bolacha) {
    localStorage.setItem("bolacha", JSON.stringify(bolacha));
    location.href = "detalhes";
  }

}
