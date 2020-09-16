package com.zti.gymreserver.reservation;

import java.sql.Timestamp;

public class DateConverter {

    public static String hoursIdToString(int hoursId) {
        String result = "";
        switch (hoursId) {
            case 0:
                result = "08:00 - 10:00";
                break;
            case 1:
                result = "10:00 - 12:00";
                break;
            case 2:
                result = "12:00 - 14:00";
                break;
            case 3:
                result = "14:00 - 16:00";
                break;
            case 4:
                result = "16:00 - 18:00";
                break;
            case 5:
                result = "18:00 - 20:00";
                break;
            case 6:
                result = "20:00 - 22:00";
                break;
        }
        return result;
    }

    public static String timestampToDate(Timestamp date) {
        return date.toString().split(" ")[0];
    }
}
