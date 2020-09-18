package com.zti.gymreserver.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
    public long addPerson(@RequestBody User user) throws SQLDataException {
        if (isLoginInUse(user.getLogin())) {
            throw new SQLDataException("User already exists!");
        }
        user.setCreateDate(new Timestamp(System.currentTimeMillis()));
        repository.save(user);
        return getUserByLogin(user.getLogin()).getId();
    }

    @PostMapping(value = "/checkUser")
    public User authorizeUser(@RequestBody UserCredentials userCredentials) throws SQLDataException {
        User user = repository.authorizeUser(userCredentials.login, userCredentials.password);
        if (user == null) {
            throw new SQLDataException("Wrong login or password");
        } else {
            return user;
        }
    }

    private boolean isLoginInUse(String login) {
        return repository.getUserByLogin(login) != null;
    }

    private User getUserByLogin(String login) {
        return repository.getUserByLogin(login);
    }
}
