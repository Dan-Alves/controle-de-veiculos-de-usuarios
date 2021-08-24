package com.danielalves.cvu.feign;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Modelo {
	
	@JsonProperty
	private String nome;
	@JsonProperty
	private String codigo;
	
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getCodigo() {
		return codigo;
	}
	public void setCodigo(String codigo) {
		this.codigo = codigo;
	}
	
}
