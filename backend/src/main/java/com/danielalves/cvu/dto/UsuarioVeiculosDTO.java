package com.danielalves.cvu.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.danielalves.cvu.domain.Usuario;
import com.danielalves.cvu.domain.Veiculo;

public class UsuarioVeiculosDTO implements Serializable {

	private static final long serialVersionUID = 1L;
	private Long id;
	private List<Veiculo> veiculos = new ArrayList<>();
	
	public UsuarioVeiculosDTO() {
		
	}
	
	public UsuarioVeiculosDTO(Usuario obj) {
		id = obj.getId();
		veiculos = obj.getVeiculos();
	}

	public List<Veiculo> getVeiculos() {
		return veiculos;
	}

	public void setVeiculos(List<Veiculo> veiculos) {
		this.veiculos = veiculos;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
}
