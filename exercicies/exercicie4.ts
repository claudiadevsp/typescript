class Data {
   public day: number 
   public month: number
   public year: number

    constructor(day: number = 1, month: number = 1, year: number = 1970) {
        this.day = day
        this.month = month
        this.year = year
    }



}
const birthday = new Data(1, 12, 1998)