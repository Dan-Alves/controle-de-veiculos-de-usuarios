package com.danielalves.cvu.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.danielalves.cvu.feign.Infos;
import com.danielalves.cvu.feign.VeiculoClient;

@RestController
public class VeiculoRestService{
	
	@Autowired
	private VeiculoClient veiculoClient;

	@GetMapping("/{tipo}/marcas/{codMarca}/modelos/{codModelo}/anos/{codAno}")
	public ResponseEntity<Infos> getValor(@PathVariable String tipo, 
			@PathVariable String codMarca, 
			@PathVariable String codModelo, 
			@PathVariable String codAno) {
		
		Infos info = veiculoClient.getInfos(tipo, codMarca, codModelo, codAno);
		return info != null ? ResponseEntity.ok().body(info) : ResponseEntity.notFound().build(); 
		
	}

}
