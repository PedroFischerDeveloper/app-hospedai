package com.api.api.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="TB_HOUSE")
public class HouseModel implements Serializable{
    private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
    private long id;
    
    private String title;

    private int vacancies;

    private double amount;

    private String description;


    public long getId() {
		  return id;
	  }
	  public void setId(long id) {
		  this.id = id;
    }
    
    public String getTitle() {
      return title;
    }
    public void setTitle(String title) {
      this.title = title;
    }
    
    public int getVacancies() {
		  return vacancies;
	  }
    public void setVacancies(int vacancies) {
      this.vacancies = vacancies;
    }

    public double getAmount() {
		  return amount;
	  }
    public void setAmount(double amount) {
      this.amount = amount;
    }

    public String getDescription() {
		  return description;
	  }
    public void setDescription(String description) {
      this.description = description;
    }
}