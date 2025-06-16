import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-perfil',
  imports: [CommonModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent {
  cliente: Cliente = new Cliente();
  mensagem: string = "";

  constructor() {
    this.carregarPerfil();
  }

  carregarPerfil() {
    let clienteLogadoJson = localStorage.getItem("clienteLogado");
    if (clienteLogadoJson) {
      this.cliente = JSON.parse(clienteLogadoJson);
    } else {
      this.mensagem = "Usuário não encontrado. Faça login novamente.";
      setTimeout(() => {
        location.href = "/login";
      }, 2000);
    }
  }

  voltarParaHome() {
    location.href = "/home";
  }
}
