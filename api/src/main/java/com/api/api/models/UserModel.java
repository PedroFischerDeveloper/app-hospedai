package com.api.api.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="TB_USERS")
public class UserModel implements Serializable {
    private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	
    private String nm_usuario;

	private String nm_email;
	
    private String nm_password;
    

    public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
    }
    
    public String getNome() {
		return nm_usuario;
	}
	public void setNome(String nm_usuario) {
		this.nm_usuario = nm_usuario;
    }
    
    public String getEmail() {
		return nm_email;
	}
	public void setEmail(String nm_email) {
		this.nm_email = nm_email;
    }


    public String getPassword() {
		return nm_password;
	}
	public void setPassword(String nm_password) {
		this.nm_password = nm_password;
    }
    
    
}