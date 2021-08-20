package com.danielalves.cvu.feign;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Modelos {
	
	@JsonProperty
	private List<Modelos> modelos;
	@JsonProperty
	private String nome;
	@JsonProperty
	private String codigo;
	
}
