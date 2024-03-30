/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
which prints the name of each magician in the array.*/
var magicianNames = ["Saif", "Faizan", "Areeb", "Bilal"];
function show_magicians() {
    for (var _i = 0, magicianNames_1 = magicianNames; _i < magicianNames_1.length; _i++) {
        var item = magicianNames_1[_i];
        console.log(item);
    }
}
;
show_magicians(); //calling funstions for 1st time
show_magicians(); //calling functions for 2nd time
