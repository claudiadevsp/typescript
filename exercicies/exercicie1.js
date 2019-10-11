"use strict";
const employee = {
    name: ['João', 'Maria', 'José'],
    point(hour) {
        return (hour <= 8) ? 'Ponto normal' : 'Fora do horario22222';
    }
};
console.log(employee.point(10));
//////////////////////////////////////////////////////////////////////////////////
