// Continuing on with the example of our previous lesson...

// ---------------------------- VARIABLES ----------------------------
var name = "Ryan";
var age = 25;

// Let's pop these variables onto the console. You'll notice that they're strung together, despite being a string and an integer.
// Essentially, they are added together :) Thanks + sign!
console.log(name + age);

// Now what if I wanted to experiment this way...
console.log(name + name); // It adds two Ryans together! RyanRyan!

console.log(age + age); // It adds both age values together. 50.

// What if I wanted to learn more attributes about Ryan? Like... what's his job? Is he single?
var job, isSingle;

console.log(isSingle); // This will return as undefined because we never defined what isSingle is. What is isSingle? A boolean?

// Ok, I should probably define both.
var job = "developer"; // I just love my developers.
var isSingle = false; // Ah yes, this is a boolean!
