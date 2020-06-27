package com.zti.gymreserver.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserRepository repository;

    @RequestMapping(method = RequestMethod.GET)
    public List<User> getUsers() {
        return repository.findAll();
    }

    @GetMapping(value = "{id}")
    public User getPerson(@PathVariable long id) {
        return repository.findById(id).orElse(null);
    }

    @RequestMapping(method = RequestMethod.POST)
    public void addPerson(@RequestBody User user) {
        user.setCreateDate(new Timestamp(System.currentTimeMillis()));
        repository.save(user);
    }
}
