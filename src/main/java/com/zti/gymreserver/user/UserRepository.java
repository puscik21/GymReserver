package com.zti.gymreserver.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Long> {
    @Query("Select u from Person u WHERE u.name = ?1 AND u.password = ?2")
    User checkIfUserExists(String name, String password);
}
