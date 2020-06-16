package com.api.api.repository;

import java.util.List;

import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;

import com.api.api.models.EvaluationModel;

@Repository
public interface EvaluationRepository extends CrudRepository <EvaluationModel, String>  {
    public List<EvaluationModel> findAll();

    public List<EvaluationModel> findById(long id);
}