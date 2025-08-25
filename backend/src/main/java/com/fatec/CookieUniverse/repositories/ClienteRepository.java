package com.fatec.CookieUniverse.repositories;

import com.fatec.CookieUniverse.domain.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {
}
