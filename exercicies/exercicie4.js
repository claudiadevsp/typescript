"use strict";
var Data = /** @class */ (function () {
    function Data(day, month, year) {
        if (day === void 0) { day = 1; }
        if (month === void 0) { month = 1; }
        if (year === void 0) { year = 1970; }
        this.day = day;
        this.month = month;
        this.year = year;
    }
    return Data;
}());
var birthday = new Data(1, 12, 1998);
