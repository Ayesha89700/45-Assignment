/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
 Because the original array will be unchanged, return the new array and store it in a separate array.
  Call show_magicians() with each array to 
  show that you have one array of the original names and one array with the Great added to each magician’s name.*/

  
//Array of magician's names
const magiciansName: string[] = ["David","Albert","Harry","Elvish"];


function showMagicians(magicians: string[]): void {
    for(const magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
      const greatMagicians: string[] =magicians.map(magician =>`The Great ${magician}`);
      return greatMagicians;
}

//Modify the array to add "the great" to each magicians name
const greatMagicianNames: string[] =make_great(magicianName);

//call the function to show the original magicians name
console.log("Original Magicians:");
showMagicians(magicianName);

//call the function to show the great magivcians name
console.log("\nGreat Magicians");
showMagicians(greatMagicianName);
