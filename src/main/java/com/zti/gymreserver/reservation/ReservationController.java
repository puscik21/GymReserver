package com.zti.gymreserver.reservation;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Timestamp;
import java.util.Calendar;
import java.util.List;

@RestController
@RequestMapping("/reservation")
@CrossOrigin(origins = "*", maxAge = 3600)
public class ReservationController {
    @Autowired
    ReservationRepository repository;

    @RequestMapping(method = RequestMethod.GET)
    public List<Reservation> getReservations() {
        return repository.findAll();
    }

    @GetMapping(value = "{id}")
    public Reservation getReservation(@PathVariable long id) {
        return repository.findById(id).orElse(null);
    }

    @RequestMapping(method = RequestMethod.POST)
    public void addReservation(@RequestBody Reservation reservation) {
        reservation.setCreateDate(new Timestamp(System.currentTimeMillis()));
        // TODO date of training will be probably prepared in another endpoint - some button of reservation
        Calendar calendar = Calendar.getInstance();
        calendar.set(Calendar.YEAR, 2020);
        calendar.set(Calendar.MONTH, 10);
        calendar.set(Calendar.DAY_OF_MONTH, 15);
        calendar.set(Calendar.HOUR_OF_DAY, 15);
        calendar.set(Calendar.MINUTE, 45);
        Timestamp timestamp = new Timestamp(calendar.getTime().getTime());
        reservation.setDate(timestamp);
        repository.save(reservation);
    }

    @DeleteMapping(value = "{id}")
    public void deleteReservation(@PathVariable long id) {
        repository.deleteById(id);
    }
}
