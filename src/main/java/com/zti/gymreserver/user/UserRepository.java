package com.zti.gymreserver.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UserRepository extends JpaRepository<User, Long> {
    @Query("Select u from Person u WHERE u.login = ?1 AND u.password = ?2")
    User authorizeUser(String login, String password);

    @Query("Select u from Person u WHERE u.login = ?1")
    User getUserByLogin(String login);
}
