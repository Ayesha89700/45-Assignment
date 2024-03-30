/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/

//variables
let fruit = "orange";
let upperCaseFruit = "ORANGE";
let ten = 10;
let twenty = 20;
let colors = ["red","blue","pink","purple"];

//Equality test
console.log("Is fruit is equal to orange?");
console.log(fruit =="orange");

//In equilty
console.log("\nIs fruit is not equal to orange?");
console.log(fruit != "orange");

//Test using lower case function
console.log("\nIs ORANGE is equal to orange after converting to lower case?");
console.log(upperCaseFruit.toLowerCase() =="orange");

console.log("\nIs ORANGE is not equal to orange after converting to lowercase?");
console.log(upperCaseFruit.toLowerCase() != "orange");

//NUMERICAL TEST
//Equal to
console.log("\nIs tent is equal to twenty?");
console.log(ten == twenty);

//Not equal to
console.log("\nIs ten is not equal to twenty?");
console.log(ten !=twenty);

//greater than
console.log("\nIs ten is greater than zero?");
console.log(ten > 0);

//Less than
console.log("\nIs twenty is less than 10?");
console.log(twenty < 10);

//Greater than or equal to
console.log("\nIs ten is greater than or equal to 5?");
console.log(ten >= 5);

//less than or equal to
console.log("\nIs twenty is less than or equal to ten?");
console.log(twenty <= 10);

//Tests using "and " & "or" operators
console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty !=10 && twenty > 10);

console.log("\n twenty is not equal to 10 and twenty is greater than 10");
console.log(twenty !=10 && twenty > 30);

//test using || OR
console.log("\n30 is greater than 80 OR 30 is equal to 30");
console.log(30 > 80 || 30 == 30);

console.log("\n30 is greater than 80 OR 30 is equal to 30");
console.log(30 > 80 || 30 != 30);

//Test whether an item is included in array
console.log("\nIs pink color is included in my colors array?");
console.log(colors.includes("pink"));

//Not include 
console.log("\nIs pink color not included in my colors array?");
console.log(!colors.includes("pink"));


