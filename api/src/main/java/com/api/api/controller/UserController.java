package com.api.api.controller;

import java.util.List;

import com.api.api.models.UserModel;
import com.api.api.repository.UserRepository;

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

public class UserController {
    @Autowired
    UserRepository userRepository;

    @GetMapping("/users")
    public List<UserModel> all() {
        return userRepository.findAll();
    }

    @GetMapping("/users/{id}")
    public List<UserModel> getId(@PathVariable(value="id")long id) {
        return userRepository.findById(id);
    }


    @PostMapping("/users")
    public UserModel store(@RequestBody UserModel users) {
        return userRepository.save(users);
    }

}