package com.zti.gymreserver.user;

import com.zti.gymreserver.Person;

import javax.persistence.*;
import java.sql.Timestamp;

@Entity(name = "Person")
@Table(name = "users")
public class User extends Person {

}
