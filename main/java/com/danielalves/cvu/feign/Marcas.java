package com.danielalves.cvu.feign;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder(toBuilder = true)
public class Marcas {

	private String nome;
	private String codigo;
	
	public Marcas(String nome, String codigo) {
		super();
		this.nome = nome;
		this.codigo = codigo;
	}

	public Marcas() {
		super();
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

	@Override
	public String toString() {
		return "Marcas [nome=" + nome + ", codigo=" + codigo + "]";
	}
	
	
}
