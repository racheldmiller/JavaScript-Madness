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

// Ok, I should probably declare and define both.
var job = "developer"; // I just love my developers.
var isSingle = false; // Ah yes, this is a boolean!

// Person 1: "Hi, what can you tell me about Ryan?"
// Person 2: "Well, I can tell you that..."
console.log(
  "His name is " +
    name +
    " he's " +
    age +
    " he works as a " +
    job +
    " is he single? " +
    isSingle
);

// At this point, pretend we're tired of dealing with Ryan. This is where mutation comes in handy.
// Since we've using the same variables, we don't need to declare using "var" again.
name = "Will";
age = 22;
isSingle = true;

// Now that we've done some tweaking, let's using the same console.log structure to see what happens.
console.log(
  "His name is " +
    name +
    " he's " +
    age +
    " he works as a " +
    job +
    " is he single? " +
    isSingle
);

// How cool is that?!
