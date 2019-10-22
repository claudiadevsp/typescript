abstract class Calculation {

    protected result: number = 0
    abstract execute(...numbers: number[]): void 

    getResult(): number {
        return this.result
    }
}