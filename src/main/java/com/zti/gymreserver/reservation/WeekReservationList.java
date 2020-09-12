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

    public void setReservationForUser(int hoursId, int dayId, long id, long userId) {
        HourReservations hourReservations = list.get(hoursId);
        setReservationInDay(hourReservations, dayId, id, userId);
    }

    private void setReservationInDay(HourReservations hourReservations, int dayId, long id, long userId) {
        switch (dayId) {
            case 0 -> hourReservations.setMon(new long[]{id, userId});
            case 1 -> hourReservations.setTue(new long[]{id, userId});
            case 2 -> hourReservations.setWed(new long[]{id, userId});
            case 3 -> hourReservations.setThu(new long[]{id, userId});
            case 4 -> hourReservations.setFri(new long[]{id, userId});
            case 5 -> hourReservations.setSat(new long[]{id, userId});
            case 6 -> hourReservations.setSun(new long[]{id, userId});
        }
    }


    public class HourReservations {
        private String name;
        private Integer hoursNumber;
        private long[] mon;
        private long[] tue;
        private long[] wed;
        private long[] thu;
        private long[] fri;
        private long[] sat;
        private long[] sun;

        public HourReservations(int hourId) {
            hoursNumber = hourId;
            this.setNameFromHourId(hourId);
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

        public long[] getMon() {
            return mon;
        }

        public void setMon(long[] mon) {
            this.mon = mon;
        }

        public long[] getTue() {
            return tue;
        }

        public void setTue(long[] tue) {
            this.tue = tue;
        }

        public long[] getWed() {
            return wed;
        }

        public void setWed(long[] wed) {
            this.wed = wed;
        }

        public long[] getThu() {
            return thu;
        }

        public void setThu(long[] thu) {
            this.thu = thu;
        }

        public long[] getFri() {
            return fri;
        }

        public void setFri(long[] fri) {
            this.fri = fri;
        }

        public long[] getSat() {
            return sat;
        }

        public void setSat(long[] sat) {
            this.sat = sat;
        }

        public long[] getSun() {
            return sun;
        }

        public void setSun(long[] sun) {
            this.sun = sun;
        }
    }
}