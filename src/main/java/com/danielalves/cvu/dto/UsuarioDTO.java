package com.danielalves.cvu.dto;

import java.io.Serializable;

import com.danielalves.cvu.domain.Usuario;

public class UsuarioDTO implements Serializable {

	private static final long serialVersionUID = 1L;
	private Integer id;
	private String nome;
	
	public UsuarioDTO() {
		
	}
	
	public UsuarioDTO(Usuario obj) {
		id = obj.getId();
		nome = obj.getNome();
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String name) {
		this.nome = name;
	}
}
