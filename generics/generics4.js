"use strict";
class Mapping {
    constructor() {
        this.items = new Array();
    }
    get(key) {
        const result = this.items
            .filter(i => i.key === key);
        return result ? result[0] : null;
    }
    add(par) {
        const find = this.get(par.key);
        if (find) {
            find.value = par.value;
        }
        else {
            this.items.push(par);
        }
    }
    delete() {
        this.items = new Array();
    }
    print() {
        console.log(this.items);
    }
}
const map = new Mapping();
map.add({ key: 1, value: 'Pedro' });
map.add({ key: 2, value: 'Maria' });
map.add({ key: 3, value: 'Rebeca' });
map.add({ key: 1, value: 'Gustavo' });
console.log(map.get(2));
map.print();
map.delete();
map.print();
