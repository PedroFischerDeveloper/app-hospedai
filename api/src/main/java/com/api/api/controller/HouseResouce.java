package com.api.api.controller;

import java.util.List;

import com.api.api.models.HouseModel;
import com.api.api.repository.HouseRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")

public class HouseResouce {
    @Autowired
    HouseRepository Repository;

    @GetMapping("/helpers")
    public List<HouseModel> all() {
        return Repository.findAll();
    }
    
    @GetMapping("/helpers/{id}")
    public List<HouseModel> getId(@PathVariable(value="id")long id) {
        return Repository.findById(id);
    }

    @PostMapping("/helpers")
    public HouseModel store(@RequestBody HouseModel house) {
        return Repository.save(house);
    }

}