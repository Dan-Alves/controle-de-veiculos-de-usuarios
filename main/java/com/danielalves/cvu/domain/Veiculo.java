package com.danielalves.cvu.domain;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.sun.istack.NotNull;

@Entity
public class Veiculo implements Serializable {

	private static final long serialVersionUID = 1L;
		
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	private String marca;
	private String modelo;
	
	@NotNull
	private String ano;
	private boolean rodizioAtivo;
	
	@ManyToOne
	@JoinColumn(name="usuario_id")
	private Usuario usuario;
	//contructors, getters, setters, hashcode equals
	//e verificaRodizio

	public Veiculo(Integer id, String marca, String modelo, String ano, Usuario usuario) {
		super();
		this.id = id;
		this.marca = marca;
		this.modelo = modelo;
		this.ano = ano;
		this.usuario = usuario;
	}
	
	public Veiculo(Integer id, String marca, String modelo, String ano) {
		super();
		this.id = id;
		this.marca = marca;
		this.modelo = modelo;
		this.ano = ano;
	}

	public Veiculo() {
		
	}
	
	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}
	
	public String getMarca() {
		return marca;
	}

	public void setMarca(String marca) {
		this.marca = marca;
	}

	public String getModelo() {
		return modelo;
	}

	public void setModelo(String modelo) {
		this.modelo = modelo;
	}

	public String getAno() {
		return ano;
	}

	public void setAno(String ano) {
		this.ano = ano;
	}

	public boolean isRodizioAtivo() {
		return rodizioAtivo;
	}

	public void setRodizioAtivo(boolean rodizioAtivo) {
		this.rodizioAtivo = rodizioAtivo;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Veiculo other = (Veiculo) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}	
	
	public static void verificaRodizio(Veiculo v) {
		
		String day = LocalDate.now().getDayOfWeek().name();
		char placaFinal = (v.getAno().charAt(3));
		
		if((placaFinal == '0' || placaFinal == '1') && day.equals("MONDAY")) {
			v.setRodizioAtivo(true);
		} else if((placaFinal == '2' || placaFinal == '3') && day.equals("TUESDAY")) {
			v.setRodizioAtivo(true);
		} else if((placaFinal == '4' || placaFinal == '5') && day.equals("WEDNESDAY")) {
			v.setRodizioAtivo(true);
		} else if((placaFinal == '6' || placaFinal == '7') && day.equals("THURSDAY")) {
			v.setRodizioAtivo(true);
		} else if((placaFinal == '8' || placaFinal == '9') && day.equals("FRIDAY")) {
			v.setRodizioAtivo(true);
		} else {
			v.setRodizioAtivo(false);
		}
		
	}
		
}
