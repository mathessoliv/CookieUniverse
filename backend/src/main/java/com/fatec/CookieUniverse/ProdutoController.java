package com.fatec.CookieUniverse;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "*")
public class ProdutoController {

    @GetMapping("/api/produto/{codigo}")
    public Produto carregar(@PathVariable("codigo") int c){
        Produto obj = new Produto();
        obj.setCodigo(1);
        obj.setNome("Oreo de baunilha");
        obj.setValor(2.99);
        obj.setQuantidade(1);
        return obj;
    }

    @GetMapping("/api/produto")
    public Produto listar() {
        Produto obj = new Produto();
        obj.setCodigo(1);
        obj.setNome("Oreo de baunilha");
        obj.setValor(2.99);
        obj.setQuantidade(1);
        return obj;
    }

}