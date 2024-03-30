
let Guest_List :string[] = ['Yasir', 'Aiesh', 'Adeem'];
let absent_Guest :string = 'Aiesh';
let new_Guest :string = 'Arshad';
Guest_List[1] = new_Guest;
// for(let i=0; i<Guest_List.length; i++){
//     console.log('\nDear Mr. ' + Guest_List[i] + ',\n\nit is our pleasure to invite you.\n\n Thank You!\n');
// }
// console.log(`mr . ${absent_Guest} is not coming to the party.`);
// console.log('Good News! we find big table so we ars inviting 3 more guest.');

// 3 guest add kiye hai array mai
Guest_List.unshift('Ahsan')
Guest_List.splice(2 ,0 ,'Yusra');
Guest_List.push('Samina');

// yaha pr 6 array kai guest ko remove karaya hai.
// for(let i=0; i<Guest_List.length; i++){
    // console.log('\nDear Mr. ' + Guest_List[i] + ',\n\nit is our pleasure to invite you.\n\n Thank You!\n');
// }

// sorry message to guest for inviting
// console.log('\nsorry we cannot arrange big table, only two people will be invited.');

// / Guest remove
while(Guest_List.length > 2){
 let remove_Guest = Guest_List.pop();
//  console.log(`Sorry Mr. ${remove_Guest}, You are not inivited for Dinner`);
}
//  Remaning 2 ivited guest.
//  for(let i=0; i<Guest_List.length; i++){
//     console.log('\n Dear Mr. ' + Guest_List[i] + ',\n\n You are still invited.\n\n Thank You!\n');
// }
// }
// Sary Guest Array sai remove kr diye.
Guest_List.splice(0,2);
console.log(Guest_List);

// Exercise 19

//  print a message indicating the number of people you are inviting to dinner.
console.log(`Total number of guest are: ${Guest_List.length}`);
