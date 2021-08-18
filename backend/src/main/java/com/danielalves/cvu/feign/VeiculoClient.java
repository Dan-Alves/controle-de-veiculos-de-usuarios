package com.danielalves.cvu.feign;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@FeignClient(url="https://parallelum.com.br/fipe/api/v1", name="veiculo")
public interface VeiculoClient {
  
	 @GetMapping("/{tipo}/marcas")
	 public List<Marcas> getMarcas(@PathVariable("tipo") String tipo);
	 
	 @GetMapping("/{tipo}/marcas/{codMarca}/modelos")
	 public List<Modelos> getModelos(@PathVariable("tipo") String tipo, 
			 @PathVariable("codMarca") String codMarca);
	 
	 @GetMapping("/{tipo}/marcas/{codMarca}/modelos/{codModelo}/anos")
	 public List<Anos> getAnos(@PathVariable("tipo") String tipo, 
			 @PathVariable("codMarca") String codMarca, 
			 @PathVariable("codModelo") String codModelo);
	 
	 @GetMapping("/{tipo}/marcas/{codMarca}/modelos/{codModelo}/anos/{codAno}")
	 Infos getInfos(@PathVariable("tipo") String tipo, 
			 @PathVariable("codMarca") String codMarca, 
			 @PathVariable("codModelo") String codModelo, 
			 @PathVariable("codAno") String codAno);
 
}
