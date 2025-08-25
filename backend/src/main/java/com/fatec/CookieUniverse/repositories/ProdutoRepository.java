package com.fatec.CookieUniverse.repositories;

import com.fatec.CookieUniverse.domain.Produto;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Integer>{
}
