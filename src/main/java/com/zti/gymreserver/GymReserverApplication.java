package com.zti.gymreserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class GymReserverApplication {

    public static void main(String[] args) {
        SpringApplication.run(GymReserverApplication.class, args);
    }

    @RestController
    public class HelloController {

        @GetMapping("/")
        public String hello() {
            return "Hello world!";
        }
    }
}
