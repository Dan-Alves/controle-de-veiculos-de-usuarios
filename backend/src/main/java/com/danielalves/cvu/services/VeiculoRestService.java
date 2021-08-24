package com.danielalves.cvu.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.danielalves.cvu.feign.Anos;
import com.danielalves.cvu.feign.Infos;
import com.danielalves.cvu.feign.Marcas;
import com.danielalves.cvu.feign.Modelo;
import com.danielalves.cvu.feign.Modelos;
import com.danielalves.cvu.feign.VeiculoClient;

@RestController
public class VeiculoRestService{
	
	@Autowired
	private VeiculoClient veiculoClient;
	
	@GetMapping("/{tipo}/marcas")
	public ResponseEntity<List<Marcas>> getMarcas(@PathVariable String tipo) {
		
		List<Marcas> info = veiculoClient.getMarcas(tipo);
		return info != null ? ResponseEntity.ok().body(info) : ResponseEntity.notFound().build(); 
		
	}
	
	@GetMapping("/{tipo}/marcas/{codMarca}/modelos")
	public Modelo[] getModelos(@PathVariable String tipo, @PathVariable String codMarca) {
		
		
		Modelos info = veiculoClient.getModelos(tipo, codMarca);
		
		ResponseEntity<Modelos> mod = ResponseEntity.ok().body(info);
		Modelos m = mod.getBody();
		Modelo[] mm = m.getModelos();
		return mm;
			
	}
	
	@GetMapping("/{tipo}/marcas/{codMarca}/modelos/{codModelo}/anos")
	public ResponseEntity<List<Anos>> getAnos(@PathVariable String tipo, 
			@PathVariable String codMarca, 
			@PathVariable String codModelo) {
		
		List<Anos> info = veiculoClient.getAnos(tipo, codMarca, codModelo);
		return info != null ? ResponseEntity.ok().body(info) : ResponseEntity.notFound().build(); 
		
	}

	@GetMapping("/{tipo}/marcas/{codMarca}/modelos/{codModelo}/anos/{codAno}")
	public ResponseEntity<Infos> getValor(@PathVariable String tipo, 
			@PathVariable String codMarca, 
			@PathVariable String codModelo, 
			@PathVariable String codAno) {
		
		Infos info = veiculoClient.getInfos(tipo, codMarca, codModelo, codAno);
		return info != null ? ResponseEntity.ok().body(info) : ResponseEntity.notFound().build(); 
		
	}

}
