// 1.) Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93:
var ages = [3, 9, 23, 64, 2, 8, 28, 93];

// A.) Programmatically subtract the value of the first element in the array from the value in the last element of the array:
console.log(ages[ages.length - 1] - ages[0]);

// B.) Add a new age with the repeated steps above:
ages.push(37);
console.log(ages);
console.log(ages[ages.length - 1 ] - ages [0]);

// C.) Loop and iterate to calculate the average age then print to console:
let total = 0
for(var i = 0; i < ages.length; i++) {
    total += ages[i];
}
let average = total/ages.length;
console.log(average);

// 2.) Create an array for names of the following: "Sam", "Tommy", "Tim", "Sally", "Buck", and "Bob":
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
console.log(names);

// 2A.) Loop and array to calculate average of names by letters per name:
var totalLetters = 0
for(var i = 0; i < names.length; i++){
    totalLetters += names[i].length;
}
var averageNames = totalLetters/names.length;
console.log(averageNames);

// 2B.) Using a loop and use array again, concatenate all names together, and seperate by spaces:
let result = '';
for(var i = 0; i < names.length; i++) {
    result = result.concat(names[i] + ' ');
}
console.log(result);

// 3.) How do you access the last element of an array?:
// You would need to use zero-based indexing by starting with 0, an example:
let videoGames = ['Role-Playing', 'Fighting', 'Driving', 'Adventure', 'Survival', 'Simulation']
// In this current array there are six elements catagorized as video games and you can find the last element by coding:
console.log(videoGames[5]);
// leading to simulation being your last element in the code when looking into the console in the web browser

// 4.) How would you acces the 1st element in your array?
// Same as before, example:
let videoGameCharacters = ['Mario', 'Samus', 'Link', 'Kirby', 'Pikachu', 'Bowser']
console.log(videoGameCharacters[0]);
// In return you would get the following element in the console, Mario.

// 5.) Create an array called nameLengths, and loop the previous names array and add the length:
let nameLengths = [];
for (var i = 0; i < names.lengths; i++) {
    nameLengths[i] = names[i].length;
}

// 6.) Write loop to iterate over the nameLengths:
sum = 0;
for (var i = 0; i < nameLengths.length; i++) {
    sum = sum + nameLengths[i];
}
console.log(sum);

// 7.) Create a function with two parameters (word and n):
function repeatWordNTimes(word, n) {
    let con = word;
    for (var i = 1; i <= n; i++) {
        con = con.concat(word);
    } return con;
}
console.log(repeatWordNTimes('Hello', 2));

// 8.) Function with two parameters firstName and lastName, with returned full name:
function fullName(firstName, lastName) {
    return firstName.concat(' ', lastName);
}
console.log('Anthony' + ' ' + 'Allen')

// 9.) Write function that takes an array of numbers and returns true if the sum of all numbers in the array is greater than 100:
function totalNumberGreaterThan (arr) {
    sum = 50+50;
    for (var i = 0; i < arr.length; i++) {
        sum = sum += arr[i];
    } if (sum === 100) {
        console.log('validation passed');
        return true;
    } else  {
        console.log('validation failed');
        return false;
    }
}
console.log(totalNumberGreaterThan(50+50));
// Changing sum = []; will change the code from true to false

// 10.) Write a function with an array of numbers ad returns the average of the current elements in the array:
function averageArr(myArray) {
    var i = 0, sum = 0, arrayLen = myArray.length;
    while (i < arrayLen) {
        sum = sum + myArray[i++];
    }
    return sum / arrayLen;
}
var myArray = [3, 19, 33, 31, 5, 91];
var x = averageArr(myArray);
console.log(x);

// 11.) Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array:
function compareTheAverage (currentArrayOne, currentArrayTwo) {
    var totalOfOne = 0;
    for (var i = 0; i < currentArrayOne.length; i++) {
        totalOfOne += currentArrayOne[i];
    }
    var totalOfTwo = 0;
    for (var i = 0; i < currentArrayTwo.length; i++) {
        totalOfTwo += currentArrayTwo[i];
    }
    var averageOne = totalOfOne / currentArrayOne.length;
    var averageTwo = totalOfTwo / currentArrayTwo.length;
    if (averageOne > averageTwo) {
        return true;
    }
    else {
        return false;
    }
}
var x = compareTheAverage([3, 19, 33, 31, 5, 91],[1, 6, 2, 27,]);
console.log(x);

// 12.) Write a function called willBuyDrink and a boolean is HotOutside and a number moneyInPocket ad returns true if it is hot outside and if money in pockey is greater than 10.50:
function willBuyDrink(isHotOutside, moneyInPocket) {
    if (isHotOutside === true && moneyInPocket > 10.50) {
        console.log("Yes, I think I will have a drink today.");
    } else {
        console.log("I am broke and it's hot, i'm not having a drink.");
    }
}
console.log(willBuyDrink(true, 10.50));

// 13.) Create a function of my own, write what it does and why you created it:
function monsterHunterIsAGreatGame(x) {
    if (x === true) {
        return "One of my favorites and by far a classic video game."
    } else {
        return "That game is just not for me, honestly."
    }
}
console.log(monsterHunterIsAGreatGame(true)); 
// This is a boolean for if Monster Hunter is a great game and returns an answer if its true or false based on the answer
// I created this function because I am currently playing Monster Hunter Rise: Sunbreak