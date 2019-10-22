class Unic {
    private static instance: Unic = new Unic
    private constructor() {}

    static getInstance(): Unic {
        return Unic.instance
    }

    now() {
        return new Date
    }
}

console.log(Unic.getInstance().now())