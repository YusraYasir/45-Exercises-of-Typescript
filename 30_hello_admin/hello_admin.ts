
const usersNames :string[] = [ 'Admin', 'Arshad', 'Yasir','Aiesh', 'Adeem'];

for (let i= 0; i< usersNames.length; i++) {

 if(usersNames[i] === 'Admin'){
 console.log('Hello Admin, would you like to see a status report?');
}

else { console.log(`Hello ${usersNames[i]}, thank you for logging in again`);
}
}