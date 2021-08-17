package com.danielalves.cvu.resources;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.danielalves.cvu.domain.Veiculo;
import com.danielalves.cvu.dto.VeiculoDTO;
import com.danielalves.cvu.services.VeiculoService;

@RestController
@RequestMapping(value="/veiculos")
public class VeiculoResource {
	
	@Autowired
	private VeiculoService service;
	
	@RequestMapping(value="/{id}", method=RequestMethod.GET)
	public ResponseEntity<Veiculo> find(@PathVariable Long id) {
		
		Veiculo obj = service.find(id);
		Veiculo.verificaRodizio(obj);
		return ResponseEntity.ok().body(obj);
				
	}
	
	@RequestMapping(value="/{usuarioId}", method=RequestMethod.POST)
	public ResponseEntity<Void> insert(@RequestBody Veiculo obj, @PathVariable Long usuarioId) {
		
		obj = service.insert(obj, usuarioId);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest()
				.path("/{id}")
				.buildAndExpand(obj.getId())
				.toUri();
		return ResponseEntity.created(uri).build();
				
	}
	
	@RequestMapping(method=RequestMethod.GET)
	public ResponseEntity<List<VeiculoDTO>> findAll() {
		
		List<Veiculo> list = service.findAll();
		
		List<VeiculoDTO> listDto = list.stream().map(obj -> new VeiculoDTO(obj)).collect(Collectors.toList());
		
		return ResponseEntity.ok().body(listDto);
				
	}
	
	@RequestMapping(value="/{id}", method=RequestMethod.DELETE)
	public ResponseEntity<Void> delete(@PathVariable Long id) {
		
		service.delete(id);
		
		return ResponseEntity.noContent().build();
				
	}
	
	@RequestMapping(value="/{id}", method=RequestMethod.PUT)
	public ResponseEntity<Void> update(@RequestBody Veiculo obj, @PathVariable Long id) {
		
		obj.setId(id);
		obj = service.update(obj);
		
		return ResponseEntity.noContent().build();
		
	}

}
