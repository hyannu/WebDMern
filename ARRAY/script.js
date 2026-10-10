// let marks= [97, 82, 75, 88,92];
// console.log(marks);
// console.log(marks.length);

// let heroes = ["Iron Man", "Captain America", "Thor", "Hulk", "Black Widow"];
// for(let hero of heroes){
//     console.log(hero);
// }
// console.log(heroes.length);



// let cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
// for(let city of cities){
//     console.log(city);
// }




//QUESTION NUMBER (2.)


// let marks=[85, 97,44, 37, 76,60];

// let sum=0;

// for(let val of marks){
//     sum+=val;
// }

// let avg=sum/marks.length;
// console.log(`avg marksof the class= ${avg}`);
// console.log(`total marks of the class= ${sum}`);
// console.log(`total students in the class= ${marks.length}`);
// console.log(`highest marks in the class= ${Math.max(...marks)}`);
// console.log(`lowest marks in the class= ${Math.min(...marks)}`);
// console.log(`marks in ascending order= ${marks.sort((a,b)=>a-b)}`);
// console.log(`marks in descending order= ${marks.sort((a,b)=>b-a)}`);
// console.log(`marks greater than 50= ${marks.filter((mark)=>mark>50)}`);
// console.log(`marks less than 50= ${marks.filter((mark)=>mark<50)}`);



// QUESTION NUMBER (3.)
// for of used
// let items=[250, 645, 300, 900, 50];
// let idx = 0; 
// for(let val of items) { 
//     // console.log(`Value of index ${idx} = ${val}`);
//     let offer=val / 10;
//     items[idx] = items[idx] - offer ;
//     console.log(`value after offer = ${items[idx]}`);
//     idx++;
// }



// for loop used

// let items=[250, 645, 300, 900, 50];
// for(let idx=0; idx<items.length; idx++){
//     let offer=items[idx] / 10;
//     items[idx] = items[idx] - offer ;
   
// }
//  console.log(items);



// array methods used
 

console.log(foodItems);
let foodItems = ["apple", "pineapple", "banana", "orange", "grapes"];
foodItems.push("mango");
let foodItems = ["apple", "pineapple", "banana", "orange", "grapes"];
foodItems.unshift("kiwi");
let foodItems = ["apple", "pineapple", "banana", "orange", "grapes"];
foodItems.pop();
let foodItems = ["apple", "pineapple", "banana", "orange", "grapes"];
foodItems.shift();
let foodItems = ["apple", "pineapple", "banana", "orange", "grapes"];
foodItems.splice(2, 1, "kiwi", "mango");
let foodItems = ["apple", "pineapple", "banana", "orange", "grapes"];
console.log(foodItems.toString());
let foodItems = ["apple", "pineapple", "banana", "orange", "grapes"];
console.log(foodItems.join(" | "));
let foodItems = ["apple", "pineapple", "banana", "orange", "grapes"];
console.log(foodItems.length);
let foodItems = ["apple", "pineapple", "banana", "orange", "grapes"];
console.log(foodItems.indexOf("banana"));
let foodItems = ["apple", "pineapple", "banana", "orange", "grapes"];
console.log(foodItems.includes("mango"));
let foodItems = ["apple", "pineapple", "banana", "orange", "grapes"];
console.log(foodItems.reverse());
let foodItems = ["apple", "pineapple", "banana", "orange", "grapes"];
console.log(foodItems.sort());
let foodItems = ["apple", "pineapple", "banana", "orange", "grapes"];
console.log(foodItems.slice(1, 4));
let foodItems = ["apple", "pineapple", "banana", "orange", "grapes"];
console.log(foodItems.splice(2, 1, "kiwi", "mango"));
let foodItems = ["apple", "pineapple", "banana", "orange", "grapes"];
console.log(foodItems);
let foodItems = ["apple", "pineapple", "banana", "orange", "grapes"];


foodItems.pop();

console.log(foodItems);