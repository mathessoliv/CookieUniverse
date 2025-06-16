import { Component } from '@angular/core';
import { Bolacha } from '../model/bolacha';
import { Cesta } from '../model/cesta';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalhe',
  imports: [CommonModule],
  templateUrl: './detalhe.component.html',
  styleUrl: './detalhe.component.css'
})

export class DetalheComponent {
    mensagem: string = ""
    bolacha: Bolacha = new Bolacha();

    constructor() {
      let json = localStorage.getItem("bolacha");

      if (json == null ) {
        this.mensagem = "Nenhuma bolacha encontrada!";
       } else {
        this.bolacha = JSON.parse(json);
       }
    }

    adicionarBolacha(bolacha: Bolacha) {
        let json = localStorage.getItem("bolachas");
        let cesta = new Cesta();
    
        if (json != null) {
          cesta = JSON.parse(json);
        } 
    
        cesta.itens.push(bolacha);
        cesta.total += bolacha.valor;
        cesta.quantidade += 1;
        
        localStorage.setItem("cesta", JSON.stringify(cesta));
        location.href = "cesta";
      }

    voltar() {
      location.href = "home";
    }
}
