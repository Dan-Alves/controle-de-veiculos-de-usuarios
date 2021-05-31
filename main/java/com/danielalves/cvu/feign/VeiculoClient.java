package com.danielalves.cvu.feign;

import java.util.List;

import com.danielalves.cvu.domain.Veiculo;
import com.danielalves.cvu.resources.VeiculoResource;

import feign.*;
import feign.Feign;
import feign.Headers;
import feign.Logger;
import feign.Param;
import feign.RequestLine;

public interface VeiculoClient {
    @RequestLine("GET /{isbn}")
    VeiculoResource findByIsbn(@Param("isbn") String isbn);

    @RequestLine("GET")
    List<VeiculoResource> findAll();

    @RequestLine("POST")
    @Headers("Content-Type: application/json")
    void create(Veiculo veiculo);
    
   
}
