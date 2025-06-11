import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  obj: Cliente = new Cliente();
  mensagem: string = "";

  fazerLogin() {
    let json = localStorage.getItem("clientes");
    if (json == null) {
      this.mensagem = "Email ou senha inválida!";
      return;
    }

    let clientes: Cliente[] = JSON.parse(json);
    let clienteEncontrado = clientes.find(c => 
      c.email === this.obj.email && c.senha === this.obj.senha
    );

    if (clienteEncontrado) {
      localStorage.setItem("clienteLogado", JSON.stringify(clienteEncontrado));
      location.href = "/home";
    } else {
      this.mensagem = "Email ou senha inválida!";
    }
  }
}
