import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {
  mensagem: String = "";
  obj: Cliente = new Cliente();
  constructor() {
    this.obj = new Cliente();
  }
  gravar() {
    // validações de para cadastrar o email
    if (!this.obj.email || !this.obj.email.trim()) {
      this.mensagem = "O e-mail é obrigatório!";
      return;
    }
    if (!this.obj.email.includes('@')) {
      this.mensagem = "Digite um e-mail válido!";
      return;
    }
    if (!this.obj.senha || this.obj.senha.length < 6) {
      this.mensagem = "A senha deve ter pelo menos 6 caracteres!";
      return;
    }

    // vai verificar se ja existe email cadastrado
    let clientes = [];
    let clientesJson = localStorage.getItem("clientes");
    if (clientesJson != null) {
      clientes = JSON.parse(clientesJson);
      if (clientes.some((c: { email: string; }) => c.email === this.obj.email)) {
        this.mensagem = "Este e-mail já está cadastrado!";
        return;
      }
    }

    // validações ok cadastra o cliente
    clientes.push(this.obj);
    localStorage.setItem("clientes", JSON.stringify(clientes));
    this.mensagem = "O cliente foi cadastrado com sucesso";
    this.obj = new Cliente();
  }
}
