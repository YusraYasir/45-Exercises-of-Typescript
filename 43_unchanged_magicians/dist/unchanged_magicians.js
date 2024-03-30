"use strict";
let magicians = ['Harry potter', 'Hermione Granger', 'Ron weasley', 'Albus Dumdledore'];
function copyarray(arr) {
    return [...arr];
}
function make_great(magicianArry) {
    for (let i = 0; i < magicianArry.length; i++) {
        magicianArry[i] = 'The Great ' + magicianArry[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
const copymagiciansarray = copyarray(magicians);
make_great(copymagiciansarray);
console.log('\n\nThis is my original array:');
show_magicians(magicians);
console.log('\n\nThis is my modified copy of the array:');
show_magicians(copymagiciansarray);
