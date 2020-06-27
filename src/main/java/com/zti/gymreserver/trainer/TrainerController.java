package com.zti.gymreserver.trainer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.List;

@RestController
@RequestMapping("/trainer")
public class TrainerController {

    @Autowired
    TrainerRepository repository;

    @RequestMapping(method = RequestMethod.GET)
    public List<Trainer> getTrainers() {
        return repository.findAll();
    }

    @GetMapping(value = "{id}")
    public Trainer getTrainer(@PathVariable long id) {
        return repository.findById(id).orElse(null);
    }

    @RequestMapping(method = RequestMethod.POST)
    public void addTrainer(@RequestBody Trainer trainer) {
        trainer.setCreateDate(new Timestamp(System.currentTimeMillis()));
        repository.save(trainer);
    }
}
