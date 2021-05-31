package com.danielalves.cvu.services;

import java.net.URI;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.danielalves.cvu.domain.Usuario;
import com.danielalves.cvu.domain.Veiculo;
import com.danielalves.cvu.repositories.VeiculoRepository;
import com.danielalves.cvu.services.exceptions.ObjectNotFoundException;

@Service
public class VeiculoService {
	
	@Autowired
	private VeiculoRepository repo;

	public Veiculo find(Integer id) {
		Optional<Veiculo> obj = repo.findById(id);
		return obj.orElseThrow(() -> new ObjectNotFoundException(
			"Objeto não encontrado! Id: " + id + ", Type: " + Veiculo.class.getName()));
	}
	
	public Veiculo insert(Veiculo obj) {
		obj.setId(null);
		return repo.save(obj);
	}
	
	

}
