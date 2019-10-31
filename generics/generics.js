"use strict";
const echo = (object) => object;
console.log(echo('Teste'));
console.log(echo(27));
console.log(echo({ name: 'Teste', age: 27 }));
function echoUp(object) {
    return object;
}
console.log(echoUp('Teste').length);
console.log(echoUp(27));
console.log(echoUp({ name: 'Teste', age: 27 }));
