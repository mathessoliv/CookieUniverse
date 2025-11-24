import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Email } from '../model/email';
import { EmailService } from '../services/email.service';

@Component({
  selector: 'app-fale-conosco',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fale-conosco.component.html',
  styleUrls: ['./fale-conosco.component.css']
})
export class FaleConoscoComponent {
  email: Email = new Email();
  mensagemSucesso: string = '';
  mensagemErro: string = '';
  enviando: boolean = false;

  constructor(
    private emailService: EmailService,
    private router: Router
  ) { }

  enviarEmail() {
    if (!this.validarFormulario()) {
      return;
    }

    this.enviando = true;
    this.mensagemSucesso = '';
    this.mensagemErro = '';

    this.emailService.enviarEmail(this.email).subscribe({
      next: (response) => {
        this.mensagemSucesso = 'Email enviado com sucesso! Entraremos em contato em breve.';
        this.limparFormulario();
        this.enviando = false;
      },
      error: (error) => {
        this.mensagemErro = 'Erro ao enviar email. Por favor, tente novamente.';
        console.error('Erro ao enviar email:', error);
        this.enviando = false;
      }
    });
  }

  validarFormulario(): boolean {
    if (!this.email.nome || this.email.nome.trim() === '') {
      this.mensagemErro = 'Por favor, informe seu nome.';
      return false;
    }

    if (!this.email.emailRemetente || this.email.emailRemetente.trim() === '') {
      this.mensagemErro = 'Por favor, informe seu email.';
      return false;
    }

    if (!this.validarEmail(this.email.emailRemetente)) {
      this.mensagemErro = 'Por favor, informe um email válido.';
      return false;
    }

    if (!this.email.assunto || this.email.assunto.trim() === '') {
      this.mensagemErro = 'Por favor, informe o assunto.';
      return false;
    }

    if (!this.email.mensagem || this.email.mensagem.trim() === '') {
      this.mensagemErro = 'Por favor, escreva sua mensagem.';
      return false;
    }

    this.mensagemErro = '';
    return true;
  }

  validarEmail(email: string): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  limparFormulario() {
    this.email = new Email();
  }

  voltar() {
    this.router.navigate(['/home']);
  }
}
