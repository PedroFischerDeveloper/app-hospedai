package com.api.api.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="TB_ADDRESS")

public class AddressModel implements Serializable{
    private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
    private long id;

    private int cd_numero;
    private String nm_endereco;
    private String nm_bairro;
    private String nm_cidade;

    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }

    public int getNumero() {
        return cd_numero;
    }
    public void setNumero(int cd_numero) {
        this.cd_numero = cd_numero;
    }


    public String getEndereco() {
        return nm_endereco;
    }
    public void setEndereco(String nm_endereco) {
        this.nm_endereco = nm_endereco;
    }

    public String getBairro() {
        return nm_bairro;
    }
    public void setBairro(String nm_bairro) {
        this.nm_bairro = nm_bairro;
    }


    public String getCidade() {
        return nm_cidade;
    }
    public void setCidade(String nm_cidade) {
        this.nm_cidade = nm_cidade;
    }

    

}