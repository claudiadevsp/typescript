"use strict";
class DataExpert {
    constructor(day = 1, month = 1, year = 1970) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
}
const birthdayExpert = new DataExpert(3, 12, 1998);
console.log(birthdayExpert);
