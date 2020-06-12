package com.api.api.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="TB_HELPERS")
public class HelpersModel implements Serializable{
    private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
    private long id;
    
    private String titulo_helper;

    private String ds_helper;

    private int cd_disponibilidade;

    private double vl_disponibilidade;

    private String cd_whatssap;

    private String nm_email;

    private int cd_tipo_helper;


    public long getId() {
		  return id;
	  }
	  public void setId(long id) {
		  this.id = id;
    }
    

    public String getTitulo() {
		return titulo_helper;
	}
	public void setTitulo(String titulo_helper) {
		this.titulo_helper = titulo_helper;
    }
    

    public String getDescricao() {
		return ds_helper;
	}
	public void setDescricao(String ds_helper) {
		this.ds_helper = ds_helper;
    }


    public int getCodigoDisponibilidade() {
		return cd_disponibilidade;
	}
	public void setCodigoDisponibilidade(int cd_disponibilidade) {
		this.cd_disponibilidade = cd_disponibilidade;
    }


    public double getValorHelper() {
		return vl_disponibilidade;
	}
	public void setValorHelper(int vl_disponibilidade) {
		this.vl_disponibilidade = vl_disponibilidade;
    }

    public String getEmail() {
        return nm_email;
    }
    public void setEmail(String nm_email) {
        this.nm_email = nm_email;
    }


    public String getWhatssap() {
        return cd_whatssap;
    }
    public void setWhatssap(String cd_whatssap) {
        this.cd_whatssap = cd_whatssap;
    }


    public int getTipoHelper() {
        return cd_tipo_helper;
    }
    public void setWhatssap(int cd_tipo_helper) {
        this.cd_tipo_helper = cd_tipo_helper;
    }
    
    

}