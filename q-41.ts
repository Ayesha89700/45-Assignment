/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
which prints the name of each magician in the array.*/

let magicianNames = ["Saif","Faizan","Areeb","Bilal"];

function show_magicians(){
     for(let item of magicianNames){
        console.log(item);
     }
};

show_magicians(); //calling funstions for 1st time
show_magicians(); //calling functions for 2nd time


