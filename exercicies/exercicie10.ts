class Math1 {
    static PI: number = 3.1416

    static areaCircle(lightning: number): number {
        return this.PI * lightning * lightning
    }
}

console.log(Math1.areaCircle(4))