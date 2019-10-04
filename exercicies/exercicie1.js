"use strict";
var employee = {
    name: ['João', 'Maria', 'José']
};
console.log(employee.name[0]);
var point = function (hour) {
    return (hour <= 8) ? 'Ponto normal' : 'Fora do horario';
};
console.log(point(10));
