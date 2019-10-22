class Intern {
    private _firstName: string = ''

    get firstName(): string {
        return this._firstName
    }

    set firstName(value: string){
        if (value.length >= 3) {
            this._firstName = value
        } else {
            this._firstName = ''
        }
    }
}

const intern = new Intern()
console.log(intern.firstName)
intern.firstName = 'Clau'
console.log(intern.firstName)
intern.firstName = 'Claudia'
console.log(intern.firstName)