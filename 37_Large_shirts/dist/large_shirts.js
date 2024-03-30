"use strict";
function make_shirts(size = 'large', text = 'I love typescript.') {
    console.log(`creating a ${size} shirt with the message ${text}`);
}
make_shirts();
make_shirts('medium');
make_shirts('small', 'I love python');
