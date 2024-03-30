"use strict";
let magician = ['Harry potter', 'Hermione Granger', 'Ron Weasley', 'Albus Dumbledore'];
function make_great(magicianarray) {
    for (let i = 0; i < magicianarray.length; i++) {
        magician[i] = 'The Great ' + magicianarray[i];
    }
}
function show_magicians(magicians) {
    magicians.forEach(element => {
        console.log(element);
    });
}
make_great(magician);
show_magicians(magician);
