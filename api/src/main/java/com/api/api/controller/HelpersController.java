package com.api.api.controller;

import java.util.List;

import com.api.api.models.HelpersModel;
import com.api.api.repository.HelpersRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * UserController
 */
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api")

public class HelpersController {
    @Autowired
    HelpersRepository helpersRepository;

    @GetMapping("/helpers")
    public List<HelpersModel> all() {
        return helpersRepository.findAll();
    }
    
    @GetMapping("/helpers/{id}")
    public List<HelpersModel> getId(@PathVariable(value="id")long id) {
        return helpersRepository.findById(id);
    }

    @PostMapping("/helpers")
    public HelpersModel store(@RequestBody HelpersModel helpers) {
        return helpersRepository.save(helpers);
    }

}