var Guest_List = ['Yasir', 'Aiesh', 'Adeem'];
var absent_Guest = 'Aiesh';
var new_Guest = 'Arshad';
Guest_List[1] = new_Guest;
for (var i = 0; i < Guest_List.length; i++) {
    console.log('\nDear Mr. ' + Guest_List[i] + ',\n\nit is our pleasure to invite you.\n\n Thank You!\n');
}
console.log("mr . ".concat(absent_Guest, " is not coming to the party."));
console.log('Good News! we find big table so we ars inviting 3 more guest.');
Guest_List.unshift('Ahsan');
Guest_List.splice(2, 0, 'Yusra');
Guest_List.push('Samina');
for (var i = 0; i < Guest_List.length; i++) {
    console.log('\nDear Mr. ' + Guest_List[i] + ',\n\nit is our pleasure to invite you.\n\n Thank You!\n');
}
