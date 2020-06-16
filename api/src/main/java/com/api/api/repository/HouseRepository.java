package com.api.api.repository;

import java.util.List;

import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

import com.api.api.models.HouseModel;

@Repository
public interface HouseRepository extends CrudRepository <HouseModel, Long>  {
    public List<HouseModel> findAll();
    
    public List<HouseModel> findById(long id);
}