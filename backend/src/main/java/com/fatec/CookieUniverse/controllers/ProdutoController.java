package com.fatec.CookieUniverse.controllers;

import com.fatec.CookieUniverse.domain.Produto;
import com.fatec.CookieUniverse.repositories.ProdutoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class ProdutoController {
    @Autowired
    ProdutoRepository produtoRepository;

    @GetMapping("/api/produto/{codigo}")
    public Produto carregar(@PathVariable("codigo") int codigo){

        if (produtoRepository.existsById(codigo)){
            return produtoRepository.findById(codigo).get();
        } else {
            return new Produto();
        }
    }

    @GetMapping("/api/produtos")
    public List<Produto> listar() {
        return produtoRepository.findAll();
    }

    @PostMapping("/api/produto")
    public void gravar(@RequestBody Produto produto){
        if (produtoRepository.existsById(produto.getCodigo())){
            throw new RuntimeException("Produto já cadastrado");
        }

        produtoRepository.save(produto);
        System.out.println("Produto cadastrado com sucesso");
    }

    @PutMapping("/api/produto")
    public void atualizar(@RequestBody Produto produto){
        if (produtoRepository.existsById(produto.getCodigo())){
            produtoRepository.save(produto);
            System.out.println("Produto atualizado com sucesso");
        } else {
            throw new RuntimeException("Produto não cadastrado");
        }
    }

    @DeleteMapping("api/produto/{codigo}")
    public void deletar(@PathVariable int codigo){
        if (produtoRepository.existsById(codigo)){
            produtoRepository.deleteById(codigo);
            System.out.println("Produto deletado com sucesso");
        }
        else {
            throw new RuntimeException("Produto não cadastrado");
        }

    }

}