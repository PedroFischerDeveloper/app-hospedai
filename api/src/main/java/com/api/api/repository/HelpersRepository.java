package com.api.api.repository;

import java.util.List;

import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

import com.api.api.models.HelpersModel;

@Repository
public interface HelpersRepository extends CrudRepository <HelpersModel, Long>  {
    
    public List<HelpersModel> findAll();
    
    public List<HelpersModel> findById(long id);
}