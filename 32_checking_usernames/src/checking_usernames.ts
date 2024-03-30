
let current_user : string[] = ['AhsAn', 'ArsHad','YusRa', 'YAsir','AiEsh'];

let new_user : string[] = ['Bilal', 'AhsAn','Raffay', 'Zayan', 'YAsir'];

new_user.forEach(newusername =>{
   let lowercase: string = newusername.toLowerCase();

   if(current_user.map(c_user => c_user.toLowerCase().includes(lowercase))){
    console.log(`The Username ${newusername} is not available. please write a different username`);
}
else{
console.log(`The username ${newusername} is available`);
}
})