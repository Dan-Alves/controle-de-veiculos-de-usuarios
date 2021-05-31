package com.danielalves.cvu;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

import com.danielalves.cvu.domain.Usuario;
import com.danielalves.cvu.domain.Veiculo;
import com.danielalves.cvu.repositories.UsuarioRepository;
import com.danielalves.cvu.repositories.VeiculoRepository;

@SpringBootApplication
@EnableFeignClients
public class ControleVeiculosDeUsuariosApplication implements CommandLineRunner{
	
	@Autowired
	private UsuarioRepository usuarioRepository;
	@Autowired
	private VeiculoRepository veiculoRepository;

	public static void main(String[] args) {
		SpringApplication.run(ControleVeiculosDeUsuariosApplication.class, args);
	}
	
	@Override
	public void run(String... args) throws Exception {
		
		Usuario u1 = new Usuario(null, "Daniel");
		
		Veiculo v1 = new Veiculo(null, "Honda", "Fit", "2011");
		Veiculo v2 = new Veiculo(null, "Fiat", "Uno", "2012");
		Veiculo v3 = new Veiculo(null, "Ford", "Ka", "2014");
		
		Veiculo.verificaRodizio(v1);
		Veiculo.verificaRodizio(v2);
		Veiculo.verificaRodizio(v3);
			
		//u1.getVeiculos().addAll(Arrays.asList(v1, v2, v3));
				
		veiculoRepository.saveAll(Arrays.asList(v1, v2, v3));
		usuarioRepository.saveAll(Arrays.asList(u1));
		

	}

}
