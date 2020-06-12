package com.api.api.controller;

import java.util.List;

import com.api.api.models.AddressModel;
import com.api.api.repository.AddressRepository;
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

public class AddressController {
    @Autowired
    AddressRepository addRepository;

    @GetMapping("/address")
    public List<AddressModel> all() {
        return addRepository.findAll();
    }

    @GetMapping("/address/{id}")
    public List<AddressModel> getId(@PathVariable(value="id")long id) {
        return addRepository.findById(id);
    }

    @PostMapping("/address")
    public AddressModel store(@RequestBody AddressModel address) {
        return addRepository.save(address);
    }

}