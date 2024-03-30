
let Guest_List :string[] = ['Yasir', 'Aiesh', 'Adeem'];
for(let i=0; i<Guest_List.length; i++){
    console.log('\nDear Mr. ' + Guest_List[i] + ',\n\nit is our pleasure to invite you.\n\n Thank You!\n');
}


let absent_Guest :string = 'Aiesh';
let new_Guest :string = 'Arshad';
Guest_List[1] = new_Guest;
for(let i=0; i<Guest_List.length; i++){
    console.log('\nDear Mr. ' + Guest_List[i] + ',\n\nit is our pleasure to invite you.\n\n Thank You!\n');
}
console.log(`mr . ${absent_Guest} is not coming to the party.`);
