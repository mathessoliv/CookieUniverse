import { Component } from '@angular/core';
import { Cliente } from '../model/cliente';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClienteService } from '../services/cliente.service';

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

  constructor(private service: ClienteService) {}

  gravar() {
    this.service.gravar(this.obj).subscribe(
      (dados) => {
        this.mensagem = "O cliente foi cadastrado com sucesso";
        window.alert(this.mensagem);
        location.href = '/home';
      },
      (erro) => {
        this.mensagem = "Erro ao cadastrar o cliente";
        window.alert(this.mensagem);
      }
    );

  }
}
