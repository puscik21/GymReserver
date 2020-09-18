package com.zti.gymreserver.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.sql.SQLDataException;
import java.sql.Timestamp;
import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*", maxAge = 3600)
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

    @PostMapping(value = "/checkUser")
    public User checkIfUserExists(@RequestBody UserCredentials userCredentials) throws SQLDataException {
        User user = repository.checkIfUserExists(userCredentials.name, userCredentials.password);
        if (user == null) {
//            throw new IOException("Wrong login or password");
            throw new SQLDataException("Wrong login or password");
        } else {
            return user;
        }
//        return user;
    }
}
