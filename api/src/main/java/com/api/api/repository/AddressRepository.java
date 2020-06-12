package com.api.api.repository;

import java.util.List;

import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

import com.api.api.models.AddressModel;

@Repository
public interface AddressRepository extends CrudRepository <AddressModel, String>  {
    public List<AddressModel> findAll();

    public List<AddressModel> findById(long id);
}