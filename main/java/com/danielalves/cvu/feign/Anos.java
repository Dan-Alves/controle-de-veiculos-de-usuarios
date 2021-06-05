package com.danielalves.cvu.feign;

import lombok.Data;

@Data
public class Anos {
	
	private String nome;
	private String codigo;
	
	public Anos() {
		
	}
	
	public Anos(String nome, String codigo) {
		this.nome = nome;
		this.codigo = codigo;
	}
	
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
