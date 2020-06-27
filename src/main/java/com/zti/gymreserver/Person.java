package com.zti.gymreserver;

import javax.persistence.*;

@Entity
public class Person{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String lname;
    private String fname;

    public String getLname() {
        return lname;
    }

    public String getFname() {
        return fname;
    }

    public void setLname(String name) {
        this.lname = name;
    }

    public void setFname(String username) {
        this.fname = username;
    }
}
