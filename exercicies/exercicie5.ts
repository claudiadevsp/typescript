class DataExpert {
    constructor(
        public day: number = 1, 
        public month: number = 1, 
        public year: number = 1970
        ) {   

    }
}
const birthdayExpert = new DataExpert(3, 12, 1998)

console.log(birthdayExpert)