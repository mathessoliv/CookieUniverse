package com.fatec.CookieUniverse.services;

import com.fatec.CookieUniverse.domain.Email;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String emailDestino;

    public void enviarEmail(Email email) {
        try {
            SimpleMailMessage message = new SimpleMailMessage();
            message.setFrom(emailDestino);
            message.setTo(email.getEmailRemetente());
            message.setSubject(email.getAssunto());
            message.setText(email.getMensagem());
            
            mailSender.send(message);
            
            System.out.println("Email enviado com sucesso!");
        } catch (Exception e) {
            System.err.println("Erro ao enviar email: " + e.getMessage());
            throw new RuntimeException("Erro ao enviar email: " + e.getMessage());
        }
    }
}
