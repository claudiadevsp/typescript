type Par<C, V> = {key: C, value: V}

class Mapping<C, V> {

    public items: Array<Par<C, V>> = new Array<Par<C, V>>()

    get(key: C): Par<C, V> | null {
        const result = this.items
            .filter(i => i.key === key)
            return result ? result[0] : null
    }
    add(par: Par<C, V>) {
        const find = this.get(par.key)
        if (find) {
            find.value = par.value
        } else {
            this.items.push(par)
        }
    }
    delete() {
        this.items = new Array<Par<C,V>>()
    }
    print() {
        console.log(this.items)
    }
}

const map = new Mapping<number, string>()
map.add({key:1, value: 'Pedro'})
map.add({key:2, value: 'Maria'})
map.add({key:3, value: 'Rebeca'})
map.add({key:1, value: 'Gustavo'})

console.log(map.get(2))
map.print()
map.delete()
map.print()