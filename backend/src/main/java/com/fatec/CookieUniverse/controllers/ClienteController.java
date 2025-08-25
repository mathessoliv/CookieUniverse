package com.fatec.CookieUniverse.controllers;

import com.fatec.CookieUniverse.domain.Cliente;
import com.fatec.CookieUniverse.repositories.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ClienteController {
    @Autowired
    private ClienteRepository clienteRepository;

    @GetMapping("/api/cliente/{codigo}")
    public Cliente carregar(@PathVariable("codigo") int codigo){

        if (clienteRepository.existsById(codigo)){
            return clienteRepository.findById(codigo).get();
        } else {
            return new Cliente();
        }
    }

    @GetMapping("/api/clientes")
    public List<Cliente> listar() {
        return clienteRepository.findAll();
    }

    @PostMapping("/api/cliente")
    public void gravar(@RequestBody Cliente cliente){
        if (clienteRepository.existsById(cliente.getCodigo())){
            throw new RuntimeException("Cliente já cadastrado");
        }

        clienteRepository.save(cliente);
        System.out.println("Cliente cadastrado com sucesso");
    }

    @PutMapping("/api/cliente")
    public void atualizar(@RequestBody Cliente cliente){
        if (clienteRepository.existsById(cliente.getCodigo())){
            clienteRepository.save(cliente);
            System.out.println("Cliente atualizado com sucesso");
        } else {
            throw new RuntimeException("Cliente não cadastrado");
        }
    }

    @DeleteMapping("/api/cliente/{codigo}")
    public void deletar(@PathVariable("codigo") int codigo) {
        if (clienteRepository.existsById(codigo)) {
            clienteRepository.deleteById(codigo);
            System.out.println("Cliente deletado com sucesso");
        } else {
            throw new RuntimeException("Cliente não cadastrado");
        }
    }

}