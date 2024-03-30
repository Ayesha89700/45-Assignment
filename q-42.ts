/*Great Magicians: Start with a copy of your program from Exercise 39. 
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
 Call show_magicians() to see that the list has actually been modified.*/

 
//Array of magician's names
const magicianName: string[] = ["David","Albert","Harry","Elvish"];


function showMagician(magicians: string[]): void {
    for(const magician of magicians) {
        console.log(magician);
    }
}

function makes_great(magicians: string[]): string[] {
      const greatMagicians: string[] =magicians.map(magician =>`The Great ${magician}`);
      return greatMagicians;
}

//Modify the array to add "the great" to each magicians name
const greatMagicianName: string[] =make_great(magicianName);

//call the function to show the original magicians name
console.log("Original Magicians:");
showMagicians(magicianName);

//call the function to show the great magivcians name
console.log("\nGreat Magicians");
showMagicians(greatMagicianName);