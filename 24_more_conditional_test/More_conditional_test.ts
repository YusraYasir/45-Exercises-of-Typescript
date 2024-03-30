
// Equality and Inequality Test 1
console.log("Equality test with string: ", "Apple" === "Apple");
// Equality and Inequality Test 2
console.log("Inequality test with string: ", ("Apple" as string) != "orange");

// Tests using the lower case function
console.log("lower case function test: ", "HELLO".toLowerCase() === "hello");

// Numerical tests involving equality 
console.log("Equality test with string: ", 26 === 26 );
// Numerical tests involving inequality
console.log("Inequality test with string: ", (26 as number) != 35 );

// greater than test 
console.log("Greater than test", 10 > 5);
//  less than test
console.log("Greater than test", 5 < 10 );

// Greater than or equal to
console.log("Greater than and equal to test:", 10 >= 10);
//  less than or equal to
console.log("less than or equal to test: ", 5 <= 10);

// Test using "and" operator 
console.log("And operator test: ", 5===5 && 10 > 5);
// Test using "or" operator 
console.log("Or operator test: ", 5===5 || false );

// Test whether an item is in a array
const fruits :string[] = ['Stawberry','Mango', 'Grapes']
console.log('Test "Stawbberry" in the array:', fruits.includes("Stawberry"));
// Test whether an item is not an array
console.log('Testing Apple is not in array: ' , !fruits.includes('Apple'));

