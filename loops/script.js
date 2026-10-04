// for(let count=1; count<=5  ; count++){
//     console.log("hello deepak");
// }
// console.log("loop is ended");

// to calculate sum of first n numbers

// let sum=0;
// for(let i=0; i<=5; i++){
//     sum=sum+i
// }
// console.log("total sum= " , sum);
// console.log("loop has ended");


// for(let i=0; i<=10;i++){
//     console.log("i = ", i , "*" , i, "=" ,i*i);
// }
// console.log("loop has ended");


//for loops 
// let n = 10;
// let j = 19;
// for(let i=1; i<=n;i++){
//     console.log(j,"*", i,  "=", j*i);
// }
// console.log("loop has ended");


//while loop
// let i=1;
// while(i<=10){
//     console.log("Apna Name");
//     i++;
// }


// do while loops

// let i=1;
// do{
//     console.log("i=", i);
//     i++;
// } while(i<=5);


//for of loop
  
// let arr = [1,2,3,4,5];
// for(let i of arr){
//     console.log(i);


//for in loop
// let student= {
//     name: "deepak",
//     age: 22,
//     city: "delhi",
//     cgpa: 7.5,
//     isPassed: true,
// };
// for(let key in student){
//     console.log("key=", key, " , value :", student[key]);
// }





// let sum = 0;
// for(let num=0; num<=100; num++){
//     if(num%2===0){
//      sum = sum + num;
//         console.log("num = ", sum);
//         console.log(sum);
//     }
    
// }



//for-of loop 
// let str="Archu deep rao";

// let size=0;
// for(let i of str){
//     console.log("i= ", i);
//     size++;
// }
// console.log("size= ", size);//14
  


// for-in loop
// let student={
//     name:"archanarao",
//     age: 23,
//     cgpa: 8.4,
//     isPass: true,
//     marks: 740,
// };
// for(let key in student){
//     console.log("key=",key, "," , "value=",student[key]);
// }



//practice question 2

let gameNum=25;
let userNum=prompt("guess the number : ");
while(userNum!==gameNum){
    userNum=prompt("you enter wrong number. guess again ");
    
}
console.log("you have guessed the correct number");