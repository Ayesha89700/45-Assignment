"use strict";
/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
Make a large shirt and a medium shirt with the default message,
 and a shirt of any size with a different message.*/
//creating a function
function make_shirts(size = "Large", printMessage = "I love TypeScript") {
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt`);
}
//calling a function with by-default values
make_shirts();
//calling a function now with medium size and default message
make_shirts("Medium");
//calling a function now with small size and also with different message
make_shirts("Small", "I love JavaScript");
