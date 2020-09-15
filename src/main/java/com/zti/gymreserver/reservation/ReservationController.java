package com.zti.gymreserver.reservation;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.PropertyAccessor;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.LinkedList;
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
    public String getTrainerWeekReservationList(@PathVariable long id) throws Exception {
        List<Reservation> reservations = repository.getTrainerReservations(id);
        TrainerWeekReservationList trainerWeekReservationList = new TrainerWeekReservationList();
        for (Reservation res : reservations) {
            Calendar calendar = Calendar.getInstance();
            Date reservationDate = new SimpleDateFormat("yyyy-MM-dd").parse(res.getDate());
            if (calendar.getTime().before(reservationDate)) {
                trainerWeekReservationList.setReservationForUser(res.getHoursId(), res.getDayId(), res.getId(), res.getUserId(), res.getDate());
            }
        }
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.setVisibility(PropertyAccessor.FIELD, JsonAutoDetect.Visibility.ANY);
        return objectMapper.writeValueAsString(trainerWeekReservationList);
    }

    @GetMapping(value = "user/week/{id}")
    public String getUserWeekReservationList(@PathVariable long id) throws Exception {
        List<Reservation> reservations = repository.getUserReservations(id);
        List<UserWeekReservation> reservationList = new LinkedList<>();
        for (Reservation res : reservations) {
//            reservationList.add(new UserWeekReservation(res.getId(), res.getTrainerId(), res.getHoursId(), res.getDate()));
        }
        ObjectMapper objectMapper = new ObjectMapper();
        objectMapper.setVisibility(PropertyAccessor.FIELD, JsonAutoDetect.Visibility.ANY);
        return objectMapper.writeValueAsString(reservationList);
    }

    @RequestMapping(method = RequestMethod.POST)
    public void addReservation(@RequestBody Reservation reservation) throws IOException {
        Calendar calendar = Calendar.getInstance();
        Timestamp creationTimestamp = new Timestamp(calendar.getTime().getTime());
        reservation.setCreateDate(creationTimestamp.toString());

        calendar.add(Calendar.DAY_OF_MONTH, reservation.getDayId());
        Timestamp reservationTimestamp = new Timestamp(calendar.getTime().getTime());
        reservation.setDate(DateConverter.timestampToDate(reservationTimestamp));

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
