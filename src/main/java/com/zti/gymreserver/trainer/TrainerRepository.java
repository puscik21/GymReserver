package com.zti.gymreserver.trainer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface TrainerRepository extends JpaRepository<Trainer, Long> {
    @Query("Select u from Trainer u WHERE u.login = ?1")
    Trainer getTrainerByLogin(String login);
}
