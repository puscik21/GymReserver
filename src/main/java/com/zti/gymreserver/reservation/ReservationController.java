package com.zti.gymreserver.reservation;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.PropertyAccessor;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.sql.Timestamp;
import java.util.Calendar;
import java.util.List;
import java.util.stream.Collectors;

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

    @GetMapping(value = "/trainer/{id}")
    public List<Reservation> getTrainerReservations(@PathVariable long id) {
        return repository.getTrainerReservations(id);
    }

    @GetMapping(value = "/user/{id}")
    public List<Reservation> getUserReservations(@PathVariable long id) {
        return repository.getUserReservations(id);
    }

    @GetMapping(value = "trainer/week/{id}")
    public String getWeekReservationList(@PathVariable long id) throws Exception {
        List<Reservation> reservations = repository.getTrainerReservations(id);
        WeekReservationList weekReservationList = new WeekReservationList();
        for (Reservation res : reservations) {
            weekReservationList.setReservationForUser(res.getHoursId(), res.getDayId(), res.getId(), res.getUserId());
        }
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.setVisibility(PropertyAccessor.FIELD, JsonAutoDetect.Visibility.ANY);
        return objectMapper.writeValueAsString(weekReservationList);
    }

    @RequestMapping(method = RequestMethod.POST)
    public void addReservation(@RequestBody Reservation reservation) throws IOException {
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

        List<Reservation> duplicates = this.getReservations().stream().filter(res -> res.equals(reservation)).collect(Collectors.toList());
        if (duplicates.size() == 0) {
            repository.save(reservation);
        } else {
            throw new IOException("Duplicated reservation");
        }
    }

    @DeleteMapping(value = "{id}")
    public void deleteReservation(@PathVariable long id) {
        repository.deleteById(id);
    }
}
