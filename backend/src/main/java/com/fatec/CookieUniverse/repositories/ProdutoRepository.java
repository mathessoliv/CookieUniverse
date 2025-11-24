package com.fatec.CookieUniverse.repositories;

import com.fatec.CookieUniverse.domain.Produto;
import org.springframework.stereotype.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Integer>{

    @Query(value = "select * from produto where destaque>0 order by destaque, nome", nativeQuery = true)
    public List<Produto> carregarVitrine();

    @Query(value = "select * from produto where keyword like ?1 or descricao like ?1", nativeQuery = true)
    public List<Produto> fazerBusca(String keyword);
}
