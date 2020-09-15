package com.zti.gymreserver.reservation;

import java.sql.Timestamp;
import java.time.LocalDateTime;

public class DateConverter {

    public static String hoursIdToString(int hoursId) {
        String result = "";
        switch (hoursId) {
            case 0 -> result = "8:00 - 10:00";
            case 1 -> result = "10:00 - 12:00";
            case 2 -> result = "12:00 - 14:00";
            case 3 -> result = "14:00 - 16:00";
            case 4 -> result = "16:00 - 18:00";
            case 5 -> result = "18:00 - 20:00";
            case 6 -> result = "20:00 - 22:00";
        }
        return result;
    }

    public static String timestampToDate(Timestamp date) {
//        LocalDateTime time = date.toLocalDateTime();
//        return String.format("%s - %s - %s", time.getYear(), time.getMonthValue(), time.getDayOfMonth());
        return date.toString().split(" ")[0];
    }
}