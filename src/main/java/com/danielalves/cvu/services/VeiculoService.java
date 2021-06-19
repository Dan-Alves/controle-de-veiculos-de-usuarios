package com.danielalves.cvu.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.danielalves.cvu.domain.Veiculo;
import com.danielalves.cvu.repositories.VeiculoRepository;
import com.danielalves.cvu.services.exceptions.ObjectNotFoundException;

@Service
public class VeiculoService {
	
	@Autowired
	private VeiculoRepository repo;
	
//	@Autowired
//	private VeiculoClient veiculoClient;

	public Veiculo find(Long id) {
		Optional<Veiculo> obj = repo.findById(id);
		return obj.orElseThrow(() -> new ObjectNotFoundException(
			"Objeto não encontrado! Id: " + id));
	}
	
	public Veiculo insert(Veiculo obj) {
		obj.setId(null);
		//Veiculo.verificaRodizio(obj);
		return repo.save(obj);
	}
	
	public List<Veiculo> findAll() {
		return repo.findAll();
	}
	

}
