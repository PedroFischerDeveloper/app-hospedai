package com.api.api.repository;

import java.util.List;

import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

import com.api.api.models.UserModel;

@Repository
public interface UserRepository extends CrudRepository <UserModel, String>  {
    public List<UserModel> findAll();

    public List<UserModel> findById(long id);
}