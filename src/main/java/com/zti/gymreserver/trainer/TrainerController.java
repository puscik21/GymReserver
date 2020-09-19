package com.zti.gymreserver.trainer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLDataException;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/trainer")
@CrossOrigin(origins = "*", maxAge = 3600)
public class TrainerController {

    @Autowired
    TrainerRepository repository;

    @RequestMapping(method = RequestMethod.GET)
    public List<Trainer> getTrainers() {
        return repository.findAll();
    }

    @GetMapping(value = "{id}")
    public List<Trainer> getTrainer(@PathVariable long id) {
        List<Trainer> list = new ArrayList<>();
        list.add(repository.findById(id).orElse(new Trainer()));
        return list;
    }

    @RequestMapping(method = RequestMethod.POST)
    public long addTrainer(@RequestBody Trainer trainer) throws SQLDataException {
        if (isLoginInUse(trainer.getLogin())) {
            throw new SQLDataException("User already exists!");
        }
        trainer.setCreateDate(new Timestamp(System.currentTimeMillis()));
        repository.save(trainer);
        return getTrainerByLogin(trainer.getLogin()).getId();
    }

    private boolean isLoginInUse(String login) {
        return repository.getTrainerByLogin(login) != null;
    }

    private Trainer getTrainerByLogin(String login) {
        return repository.getTrainerByLogin(login);
    }
}
