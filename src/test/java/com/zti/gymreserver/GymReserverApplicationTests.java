package com.zti.gymreserver;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.sql.Connection;
import java.sql.SQLException;

@SpringBootTest
class GymReserverApplicationTests {

    @Autowired
    PersonRepository repository;

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
