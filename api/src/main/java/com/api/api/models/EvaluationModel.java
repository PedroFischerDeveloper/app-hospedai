package com.api.api.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="TB_HOUSE")
public class EvaluationModel implements Serializable{
    private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
    private long id;
    
    private String description;

    private int starts;


    public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
    }

    public String getDescription() {
        return description;
    }
    public void setDescription(String value) {
        this.description = value;
    }

    public int getStarts() {
        return starts;
    }
    public void setStarts(int value) {
        this.starts = value;
    }

}