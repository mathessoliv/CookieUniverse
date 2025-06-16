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
  public oreos: Bolacha[] = [];
  public bauduccos: Bolacha[] = [];
  public bauduccoWaffers: Bolacha[] = [];
  public trakinas: Bolacha[] = [];
  public trakinasWaffers: Bolacha[] = [];
  
  public bolachas: Bolacha[][] = [
  this.oreos = [
    { codigo: 1,
      nome:"Oreo tradicional",
      marca: "Oreo",
      valor:3.99,
      descricao: "Biscoito recheado de chocolate 90g",
      keywords: ["biscoito", "tradicional", "oreo"],
      categoria: "Oreo",
      quantidade: 0
    },

    { codigo: 2,
      nome:"Oreo sabor morango",
      marca:"Oreo",
      valor:3.99,
      descricao: "Biscoito recheado de morango 90g",
      keywords: ["BISCOITO", "OREO", "MORANGO"],
      categoria: "Oreo",
      quantidade: 0
    },

    { codigo: 3,
      nome:"Oreo sabor chocolate",
      marca:"Oreo",
      valor:3.99,
      descricao: "Biscoito recheado de chocolate 90g",
      keywords: ["BISCOITO", "OREO", "CHCOLATE"],
      categoria: "Oreo",
      quantidade: 0
    },
    
    {
      codigo: 4,
      nome: "Oreo sabor limão",
      marca:"Oreo",
      valor: 3.99,
      descricao: "Biscoito recheado de limão 90g",
      keywords: ["BISCOITO",  "OREO", "LIMÃO"],
      categoria: "Oreo",
      quantidade: 0
    },

    {
      codigo: 5,
      nome: "Oreo Edição Especial: Wandinha",
      marca:"Oreo",
      valor: 7.49,
      descricao: "Biscoito Oreo Chocolate Recheado Sabor Baunilha 144g",
      keywords: ["WANDINHA", "OREO", "BAUNILHA"],
      categoria: "Oreo",
      quantidade: 0
    },

    {
      codigo: 6,
      nome: "Oreo Edição Especial: Batman",
      marca:"Oreo",
      valor: 7.49,
      descricao: "Biscoito Oreo Chocolate Recheado Sabor Baunilha 144g",
      keywords: ["BATMAN", "OREO", "BAUNILHA"],
      categoria: "Oreo",
      quantidade: 0
    },

    {
      codigo: 7,
      nome: "Oreo Edição Especial: Star Wars",
      marca:"Oreo",
      valor: 7.49,
      descricao: "Biscoito Oreo Chocolate Recheado Sabor Baunilha 144g",
      keywords: ["STAR", "WARS", "OREO", "BAUNILHA"],
      categoria: "Oreo",
      quantidade: 0
    },

    {
      codigo: 8,
      nome: "Oreo Edição Especial: Pokémon",
      marca:"Oreo",
      valor: 7.49,
      descricao: "Biscoito Oreo Chocolate Recheado Sabor Baunilha 144g",
      keywords: ["POKEMON", "POKÉMON" , "OREO", "BAUNILHA"],
      categoria: "Oreo",
      quantidade: 0
    }
  ],

  this.bauduccos = [
    {
      codigo: 1,
      nome: "Bauducco Chocolate",
      marca:"Bauducco",
      valor: 2.49,
      descricao: "Biscoito Bauducco Recheado Chocolate 140g",
      keywords: ["BISCOITO", "BAUDUCCO", "CHOCOLATE"],
      categoria: "Bauducco",
      quantidade: 0
    },

    {
      codigo: 2,
      nome: "Bauducco Morango",
      marca:"Bauducco",
      valor: 2.49,
      descricao: "Biscoito Bauducco Recheado Morango 140g",
      keywords: ["BISCOITO", "BAUDUCCO", "MORANGO"],
      categoria: "Bauducco",
      quantidade: 0
    },

    {
      codigo: 3,
      nome: "Bauducco Baunilha",
      marca:"Bauducco",
      valor: 2.49,
      descricao: "Biscoito Bauducco Recheado Baunilha 140g",
      keywords: ["BISCOITO", "BAUDUCCO", "BAUNILHA"],
      categoria: "Bauducco",
      quantidade: 0
    },

    {
      codigo: 4,
      nome: "Bauducco Duplo Chocolate",
      marca:"Bauducco",
      valor: 2.49,
      descricao: "Biscoito Bauducco Duplo Chocolate 140g",
      keywords: ["BISCOITO", "BAUDUCCO", "DUPLO" , "CHOCOLATE"],
      categoria: "Bauducco",
      quantidade: 0
    }
  ],

  this.trakinas = [
     {
      codigo: 1,
      nome: "Trakinas Chocolate",
      marca:"Trakinas",
      valor: 2.83,
      descricao: "Biscoito Trakinas Recheado Chocolate 126G",
      keywords: ["BISCOITO", "TRAKINAS", "CHOCOLATE"],
      categoria: "Trakinas",
      quantidade: 0
    },

    {
      codigo: 2,
      nome: "Trakinas Morango",
      marca:"Trakinas",
      valor: 2.83,
      descricao: "Biscoito Trakinas Recheado Morango 126G",
      keywords: ["BISCOITO", "TRAKINAS", "MORANGO"],
      categoria: "Trakinas",
      quantidade: 0
    },

    {
      codigo: 3,
      nome: "Trakinas Tutti-Frutti Bubaloo",
      marca:"Trakinas",
      valor: 2.83,
      descricao: "Biscoito Recheado Trakinas Tutti-Frutti Bubbaloo 126g",
      keywords: ["BISCOITO", "TRAKINAS", "TUTTI", "FRUTTI" , "BUBALOO"],
      categoria: "Trakinas",
      quantidade: 0
    },

    {
      codigo: 4,
      nome: "Trakinas Limão",
      marca:"Trakinas",
      valor: 2.83,
      descricao: "Biscoito Recheado Trakinas Limão 126g",
      keywords: ["BISCOITO", "TRAKINAS", "LIMAO" , "LIMÃO"],
      categoria: "Trakinas",
      quantidade: 0
    }
  ]

  ];
  
  public listaFiltrada: Bolacha[];

  constructor() {
    let json = localStorage.getItem("filtro");
    this.listaFiltrada = this.bolachas.flat();

    if (json != null) {
        let filtro = json;
        if (filtro != "") this.fazerBusca(filtro);
    }

    
  }

  fazerBusca(filtro: string) {
    const todasBolachas: Bolacha[] = this.bolachas.flat();
    
    if (filtro == '') {
      this.mensagem = "";
    }

    this.mensagem = "Pesquisa por: " + filtro;
    
    this.listaFiltrada = todasBolachas;
    this.listaFiltrada = todasBolachas.filter(Bolacha => Bolacha.nome.toLowerCase().includes(filtro.toLowerCase())
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
