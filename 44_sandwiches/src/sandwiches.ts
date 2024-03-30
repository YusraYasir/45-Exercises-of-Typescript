
function makesandwich(items:string[]){
console.log('\nMaking your sandwich with:');

     items.forEach(element => console.log("- " + element));

     console.log('Enjoy your sandwich !\n');
}
 makesandwich(['Ham','Cheese', 'lecttuce']);

 makesandwich(['Turkey', 'Bacon']);

 makesandwich(['Peanut butter','Jelly']);
