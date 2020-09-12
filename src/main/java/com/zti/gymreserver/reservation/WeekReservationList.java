package com.zti.gymreserver.reservation;

import java.util.ArrayList;
import java.util.List;

public class WeekReservationList {

    private List<HourReservations> list;

    public WeekReservationList() {
        list = new ArrayList<>(7);
        for (int hourId = 0; hourId < 7; hourId++) {
            list.add(new HourReservations(hourId));
        }
    }

    public void setReservationForUser(int hoursId, int dayId, long userId) {
        HourReservations hourReservations = list.get(hoursId);
        setReservationInDay(hourReservations, dayId, userId);
    }

    private void setReservationInDay(HourReservations hourReservations, int dayId, long userId) {
        switch (dayId) {
            case 0 -> hourReservations.setMon(userId);
            case 1 -> hourReservations.setTue(userId);
            case 2 -> hourReservations.setWed(userId);
            case 3 -> hourReservations.setThu(userId);
            case 4 -> hourReservations.setFri(userId);
            case 5 -> hourReservations.setSat(userId);
            case 6 -> hourReservations.setSun(userId);
        }
    }


    public class HourReservations {
        private String name;
        private Integer hoursNumber;
        private Long mon;
        private Long tue;
        private Long wed;
        private Long thu;
        private Long fri;
        private Long sat;
        private Long sun;

        public HourReservations(int hourId) {
            // TODO sprawdzic czy sam sie null ustawia
//            name = null;
            hoursNumber = hourId;
            this.setNameFromHourId(hourId);
            mon = null;
            tue = null;
            wed = null;
            thu = null;
            fri = null;
            sat = null;
            sun = null;
        }

        private void setNameFromHourId(int hoursId) {
            switch (hoursId) {
                case 0 -> this.setName("8:00 - 10:00");
                case 1 -> this.setName("10:00 - 12:00");
                case 2 -> this.setName("12:00 - 14:00");
                case 3 -> this.setName("14:00 - 16:00");
                case 4 -> this.setName("16:00 - 18:00");
                case 5 -> this.setName("18:00 - 20:00");
                case 6 -> this.setName("20:00 - 22:00");
            }
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public Integer getHoursNumber() {
            return hoursNumber;
        }

        public void setHoursNumber(Integer hoursNumber) {
            this.hoursNumber = hoursNumber;
        }

        public Long getMon() {
            return mon;
        }

        public void setMon(Long mon) {
            this.mon = mon;
        }

        public Long getTue() {
            return tue;
        }

        public void setTue(Long tue) {
            this.tue = tue;
        }

        public Long getWed() {
            return wed;
        }

        public void setWed(Long wed) {
            this.wed = wed;
        }

        public Long getThu() {
            return thu;
        }

        public void setThu(Long thu) {
            this.thu = thu;
        }

        public Long getFri() {
            return fri;
        }

        public void setFri(Long fri) {
            this.fri = fri;
        }

        public Long getSat() {
            return sat;
        }

        public void setSat(Long sat) {
            this.sat = sat;
        }

        public Long getSun() {
            return sun;
        }

        public void setSun(Long sun) {
            this.sun = sun;
        }
    }
}