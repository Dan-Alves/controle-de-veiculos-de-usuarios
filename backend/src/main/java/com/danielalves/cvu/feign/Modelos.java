package com.danielalves.cvu.feign;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Modelos {
	
	@JsonProperty("modelos")
	private Modelo[] modelo;

	public Modelo[] getModelos() {
		return modelo;
	}

	public void setModelos(Modelo[] modelo) {
		this.modelo = modelo;
	}
		
}
