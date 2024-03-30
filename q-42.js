/*Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
 Call show_magicians() to see that the list has actually been modified.*/
//Array of magician's names
var magicianName = ["David", "Albert", "Harry", "Elvish"];
function showMagicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    var greatMagicians = magicians.map(function (magician) { return "The Great ".concat(magician); });
    return greatMagicians;
}
//Modify the array to add "the great" to each magicians name
var greatMagicianName = make_great(magicianName);
//call the function to show the original magicians name
console.log("Original Magicians:");
showMagicians(magicianName);
//call the function to show the great magivcians name
console.log("\nGreat Magicians");
showMagicians(greatMagicianName);
