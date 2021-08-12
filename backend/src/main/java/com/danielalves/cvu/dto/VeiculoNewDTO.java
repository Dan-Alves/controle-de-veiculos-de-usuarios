package com.danielalves.cvu.dto;

import java.io.Serializable;

import com.danielalves.cvu.domain.Veiculo;
import com.sun.istack.NotNull;

public class VeiculoNewDTO implements Serializable {

	private static final long serialVersionUID = 1L;
	private Long id;
	private String marca;
	private String modelo;
	
	@NotNull
	private String ano;
	
	public VeiculoNewDTO(Veiculo obj) {
		id = obj.getId();
		modelo = obj.getModelo();
		marca = obj.getMarca();
		ano = obj.getAno();
	}
	
	public VeiculoNewDTO() {
		
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}

	public String getModelo() {
		return modelo;
	}

	public void setModelo(String modelo) {
		this.modelo = modelo;
	}

	public String getAno() {
		return ano;
	}

	public void setAno(String ano) {
		this.ano = ano;
	}
	
}
