package com.zti.gymreserver;

import com.zti.gymreserver.user.UserRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class GymReserverApplicationTests {

    @Autowired
    UserRepository repository;

    @Test
    void contextLoads() {
    }


//    @Test
//    public void databaseConnectionTest() throws SQLException {
//        try {
//            repository.findAll();
//        }
//    }
}
