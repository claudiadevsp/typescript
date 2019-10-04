"use strict";
var employee = {
    name: ['João', 'Maria', 'José'],
    point: function (hour) {
        return (hour <= 8) ? 'Ponto normal' : 'Fora do horario';
    }
};
console.log(employee.point(10));
