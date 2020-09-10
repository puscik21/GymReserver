package com.zti.gymreserver.reservation;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    @Query("Select r from Reservation r WHERE r.trainerId = ?1")
    List<Reservation> getTrainerReservations(long id);

    @Query("Select r from Reservation r WHERE r.userId = ?1")
    List<Reservation> getUserReservations(long id);
}
