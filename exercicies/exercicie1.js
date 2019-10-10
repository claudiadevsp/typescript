"use strict";
var employee = {
    name: ['João', 'Maria', 'José'],
    point: function (hour) {
        return (hour <= 8) ? 'Ponto normal' : 'Fora do horario22222';
    }
};
console.log(employee.point(10));
//////////////////////////////////////////////////////////////////////////////////
