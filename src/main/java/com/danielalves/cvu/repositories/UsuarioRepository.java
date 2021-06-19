package com.danielalves.cvu.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.danielalves.cvu.domain.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
	
}
