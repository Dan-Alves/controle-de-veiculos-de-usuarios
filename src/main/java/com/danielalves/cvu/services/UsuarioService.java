package com.danielalves.cvu.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.danielalves.cvu.domain.Usuario;
import com.danielalves.cvu.repositories.UsuarioRepository;
import com.danielalves.cvu.services.exceptions.DataIntegrityException;
import com.danielalves.cvu.services.exceptions.ObjectNotFoundException;

@Service
public class UsuarioService {
	
	@Autowired
	private UsuarioRepository repo;

	public Usuario find(Integer id) {
		Optional<Usuario> obj = repo.findById(id);
		return obj.orElseThrow(() -> new ObjectNotFoundException(
			"Objeto não encontrado! Id: " + id));
	}
	
	public Usuario insert(Usuario obj) {
		try {
			obj.setId(null);
			return repo.save(obj);
		} catch(DataIntegrityViolationException e) {
			throw new DataIntegrityException("Não foi possível inserir usuário!");
		}
	}
	
	public Usuario update(Usuario obj) {
		find(obj.getId());
		return repo.save(obj);
	}
	
	public void delete(Integer id) {
		find(id);
		try {
			repo.deleteById(id);
		} catch(DataIntegrityViolationException e) {
			throw new DataIntegrityException("Não foi possível deletar usuário!");
		}
		
	}
	
	public List<Usuario> findAll() {
		return repo.findAll();
	}
	
	public Page<Usuario> findPage(Integer page, Integer linesPerPage, String orderBy, String direction) {
		PageRequest pageRequest = PageRequest.of(page, linesPerPage, Direction.valueOf(direction), orderBy);
		return repo.findAll(pageRequest);
	}

}
