/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
The function should have one parameter that collects as many items as the function call provides,
 and it should print a summary of the sandwich that is being ordered. Call the function three times
 , using a different number of arguments each time.*/
//array as A parameter
function mySandwhiches() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    return "I want Sandwhich of ".concat(items);
}
;
var collection1 = mySandwhiches("Sausage", "Cheese", "Tomatoes");
var collection2 = mySandwhiches("Beef", "spicy");
var collection3 = mySandwhiches("Chicken");
console.log(collection1);
console.log(collection2);
console.log(collection3);
