package com.danielalves.cvu.feign;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder(toBuilder = true)
public class Infos {
	
	@JsonProperty
	private String Valor;
	@JsonProperty
	private String Marca;
	@JsonProperty
	private String Modelo;
	@JsonProperty
	private String AnoModelo;
	@JsonProperty
	private String Combustivel;
	@JsonProperty
	private String CodigoFipe;
	@JsonProperty
	private String MesReferencia;
	@JsonProperty
	private String TipoVeiculo;
	@JsonProperty
	private String SiglaCombustivel;
	

}
