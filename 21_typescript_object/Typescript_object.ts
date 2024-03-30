
//  Data type of person object
interface person {
    age : number,
    name :string,
    nationality : string,
    student : boolean
}

//  person object
let person :person = { 
    age : 24,
    name : 'Yasir',
    nationality : 'pakistan',
    student : true
}
console.log(person);


// interfaces of car object
 interface car {
    maker : string,
    color : string,
    automatic : boolean
 }

// car object
let car : car = {
    maker : 'toyota',
    color : ' black',
    automatic : true
}
console.log(car);
