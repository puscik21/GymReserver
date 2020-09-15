package com.zti.gymreserver.reservation;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.Duration;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

public class TrainerWeekReservationList {

    private List<HourReservations> list;

    public TrainerWeekReservationList() {
        list = new ArrayList<>(7);
        for (int hourId = 0; hourId < 7; hourId++) {
            list.add(new HourReservations(hourId));
        }
    }

    public void setReservationForUser(int hoursId, long id, long userId, String date) {
        HourReservations hourReservations = list.get(hoursId);
        setReservationInDay(hourReservations, id, userId, date);
    }

    private void setReservationInDay(HourReservations hourReservations, long id, long userId, String date) {
        long difference = 0;
        Calendar calendar = Calendar.getInstance();
        calendar.set(Calendar.HOUR_OF_DAY, 0);
        calendar.set(Calendar.MINUTE, 0);
        calendar.set(Calendar.SECOND, 0);
        calendar.set(Calendar.MILLISECOND, 0);

        try {
            difference = Duration.between(calendar.toInstant(), new SimpleDateFormat("yyyy-MM-dd").parse(date).toInstant()).toDays();
        } catch (ParseException e) {
            e.printStackTrace();
        }
        switch ((int) difference) {
            case 0 -> hourReservations.setDay0(new long[]{id, userId});
            case 1 -> hourReservations.setDay1(new long[]{id, userId});
            case 2 -> hourReservations.setDay2(new long[]{id, userId});
            case 3 -> hourReservations.setDay3(new long[]{id, userId});
            case 4 -> hourReservations.setDay4(new long[]{id, userId});
            case 5 -> hourReservations.setDay5(new long[]{id, userId});
            case 6 -> hourReservations.setDay6(new long[]{id, userId});
        }
    }


    public class HourReservations {
        private String name;
        private Integer hoursNumber;
        private long[] day0;
        private long[] day1;
        private long[] day2;
        private long[] day3;
        private long[] day4;
        private long[] day5;
        private long[] day6;

        public HourReservations(int hourId) {
            hoursNumber = hourId;
            this.setName(DateConverter.hoursIdToString(hourId));
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

        public long[] getDay0() {
            return day0;
        }

        public void setDay0(long[] day0) {
            this.day0 = day0;
        }

        public long[] getDay1() {
            return day1;
        }

        public void setDay1(long[] day1) {
            this.day1 = day1;
        }

        public long[] getDay2() {
            return day2;
        }

        public void setDay2(long[] day2) {
            this.day2 = day2;
        }

        public long[] getDay3() {
            return day3;
        }

        public void setDay3(long[] day3) {
            this.day3 = day3;
        }

        public long[] getDay4() {
            return day4;
        }

        public void setDay4(long[] day4) {
            this.day4 = day4;
        }

        public long[] getDay5() {
            return day5;
        }

        public void setDay5(long[] day5) {
            this.day5 = day5;
        }

        public long[] getDay6() {
            return day6;
        }

        public void setDay6(long[] day6) {
            this.day6 = day6;
        }
    }
}