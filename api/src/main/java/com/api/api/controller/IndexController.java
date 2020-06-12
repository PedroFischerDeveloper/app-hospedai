package com.api.api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * IndexController
 */
@RestController
public class IndexController {
    
    @GetMapping(value="/")
    public String getMethodName() {
        return "API 1.0.0 Online";
    }
}