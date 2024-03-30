"use strict";
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
const guest = ["Ansha", "Habiba", "Fatima"];
console.log(guest);
console.log(`We have a found a bigger dinner table so we have 3 more guest 
to invite on dinner\n`);
//adding 3 more guests here
//This will add at the beginning
guest.unshift("Laiba");
//[ "laiba" ,"Ansha", "habiba", "fatima", "abeera" ];
console.log(guest);
//this will add at middle
guest.splice(2, 0, "Fakiha");
console.log(guest);
//this will add at last
guest.push("Saleha");
console.log(guest);
//print all friends with a message
for (let i = 0; i < guest.length; i++) {
    console.log(`Miss.${guest[i]} you are invited to my dinner`);
}
