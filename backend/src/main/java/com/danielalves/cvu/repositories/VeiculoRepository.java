package com.danielalves.cvu.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.danielalves.cvu.domain.Veiculo;

public interface VeiculoRepository extends JpaRepository<Veiculo, Long> {

}
