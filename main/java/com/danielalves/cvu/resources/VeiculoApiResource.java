package com.danielalves.cvu.resources;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.danielalves.cvu.feign.Infos;
import com.danielalves.cvu.feign.VeiculoClient;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@RestController
@RequestMapping("/{tipo}/marcas/{codMarca}/modelos/{codModelo}/anos/{codAno}")
public class VeiculoApiResource{
	
	private VeiculoClient veiculoClient;

	@GetMapping
	private List<Infos> getInfos() {
		return veiculoClient.getInfos(null, null, null, null);
	}

}
