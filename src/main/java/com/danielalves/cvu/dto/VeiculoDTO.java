package com.danielalves.cvu.dto;

import java.io.Serializable;

import com.danielalves.cvu.domain.Veiculo;

public class VeiculoDTO implements Serializable {

	private static final long serialVersionUID = 1L;
	private Long id;
	private String nome;
	
	public VeiculoDTO() {
		
	}
	
	public VeiculoDTO(Veiculo obj) {
		id = obj.getId();
		//nome = obj.getModelo();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String name) {
		this.nome = name;
	}
}
