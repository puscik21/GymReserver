package com.zti.gymreserver.reservation;

public class UserWeekReservation {

    private long id;
    private long trainerId;
    private String hours;
    private String date;

    public UserWeekReservation(long id, long trainerId, int hoursId, String date) {
        this.id = id;
        this.trainerId = trainerId;
        this.hours = DateConverter.hoursIdToString(hoursId);
        this.date = date;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public long getTrainerId() {
        return trainerId;
    }

    public void setTrainerId(long trainerId) {
        this.trainerId = trainerId;
    }

    public String getHours() {
        return hours;
    }

    public void setHours(String hours) {
        this.hours = hours;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
