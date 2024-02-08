// 1. Addition

// Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5, 
// but not both 3 and 5. To solve this task you might want to use the modulus operator.

let sum = 0;
for(let i = 200; i< 2700; i++){
    if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)) {
        sum += i;
    }
}

console.log(sum);


2//

let x = [2, 1, 6, 4, -7];
let shiftedArray = [];

for (let index = 0; index < x.length; index++) {
  shiftedArray[index] = x[x.length - 1 - index];
}

console.log(shiftedArray);
console.log(x);


3//     

// let newArray=[];
// for (let index = 0; index < 135; index++) {
// if (index % 3 === 0){
//     newArray.push('Fizz')
// }else if ( index % 5 === 0){
//     newArray.push('Buzz')
// }else if (index % 3 === 0 && index % 5 === 0){
//     newArray.push('FizzBuzz')
// }else{
//     newArray.push();
// }
// }

// console.log(newArray);

//4 
// let fibonacci = []
// for (let i=0 ; i<= 1000000 ; i++){
//     if (i==0){
//           fibonacci[i]=i
//     }else if (i==1){
//         fibonacci[i]=i
//     }else {
//         fibonacci [i]=fibonacci[i-1]+fibonacci[i-2]
//     }  
// }
// console.log(fibonacci.length)
// console.log(fibonacci)


//5


let negNums = [1, -2, 4, 1];
for (let i = 0; i < negNums.length; i++) {
    if (negNums[i] < 0) {
    negNums.splice(i, 1);
    i--;
}
}

console.log(negNums);


//6 

let arrStrings = ["Man", "I", "Love", "The", "Matrix", "Program"];
let word = "Program";
let m = ''


  for (let i = 0; i <= arrStrings.length; i++) {
      if (i < word.length){
          m+=`*`;
      }
    if (arrStrings[i] == word) {
        arrStrings[i] = m
    }
  }
 
console.log(arrStrings);
