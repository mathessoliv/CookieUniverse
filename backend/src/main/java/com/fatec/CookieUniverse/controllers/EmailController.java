package com.fatec.CookieUniverse.controllers;

import com.fatec.CookieUniverse.domain.Email;
import com.fatec.CookieUniverse.services.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class EmailController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/api/email")
    public ResponseEntity<String> enviarEmail(@RequestBody Email email) {
        try {
            emailService.enviarEmail(email);
            return ResponseEntity.ok("Email enviado com sucesso!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Erro ao enviar email: " + e.getMessage());
        }
    }
}
