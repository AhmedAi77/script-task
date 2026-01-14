// 1
function sum(a,b){
    answer=a+b
    return answer
}

console.log(sum(2,3))

// 2

function multiply(a,b){
    answer=a*b;
    return answer
}
console.log(multiply(3,2))

// 3

function isEven(n){
    if (n%2==0)
        console.log("even")
    else {
        console.log("odd")
    }
    return n
}
console.log(isEven(4))


// 4 

function isOdd(n){
    if (n%2==0)
        console.log("even")
    else {
        console.log("odd")
    }
    return n
}
console.log(isEven(4))

// 5


function yearsToDayes (years){
    year = 365;
    answer = year * years
    return answer

}
console.log(yearsToDayes(3))


// 6

function checkAge(age){
    if (age >= 18) {
        console.log("Adult")
    }
    else 
     {
        console.log("miner")}

    return age
}
console.log(checkAge(12))


// 7

function getAbs(n){
    answer=Math.abs(n)
    return n

}
console.log(getAbs(5))


// 8

function hoursToSeconds(hours) {
    return hours * 3600;
}

console.log(hoursToSeconds(1))


//9

function triangleArea(base, height) {
  return (base * height) / 2;
}

triangleArea(10, 5); 


//10

function reminder(a, b) {
 Math.floor(a / b); 
    let answer = a % b;               
    
    return answer;
}

console.log(reminder(17, 5));

// 11

function isDividedBy10 (n){
if (n % 10 == 0) {
    console.log("can divided by 10")}
 else {
    console.log("can not")

    }

    return n
}
console.log(isDividedBy10(9))


//12

function cub(n){
    answer=n*n*n

    return answer
}
console.log(cub(3))


// 13
 function greet(name){
    console.log("hello "+ name)
    return name
 }

 console.log(greet("ahmed"))

 //14

 function IsEmpty(str){
    return str ==="";
 }
 console.log(IsEmpty(""));


 //15

 function strLength (str){
    return str.length
 }
 console.log(strLength("ahmed33"))


 //16
  function comperString (str1,str2){
    return str1 === str2
  }
  console.log(comperString("ahmed","ahmed4"))


  //17
   function getmax (a,b){
    return Math.max(a,b)
   }
console.log(getmax(3,9))


  //18
   function getmin (a,b){
    return Math.min(a,b)
   }
console.log(getmin(3,9))


//19

function kmToMetares (km){

return km*1000

}

console.log(kmToMetares(3))


//20

function celesusToFahrenhets (celeus){
return (celeus * 9/5) +32
}
console.log(celesusToFahrenhets(25))

console.log('============================================================')


//21

function getFirstElement(arr) {
    return arr[0]
}

console.log(getFirstElement("ahmed"))


//22

function getLastElement(arr) {
return arr[-1]
}
console.log(getFirstElement("ahmed"))


23//

function averageArray(arr) {
  return sumArray(arr) / arr.length;
}
  
//24

function sumArray(arr) {
  return arr.reduce((a, b) => a + b, 0);
}

//25

function findElement(arr, elem) {
  return arr.includes(elem);
}

//26

function filterEvens(arr) {
  return arr.filter(n => n % 2 === 0);
}

//27


function reverseArray(arr) {
  return [...arr].reverse();
}


//28

function reverseString(str) {
  return str.split("").reverse().join("");
}


//29

function toUpper(str) {
  return str.toUpperCase();
}


//30

function trimString(str) {
  return str.trim();
}


//31

function trimString(str) {
  return str.trim();
}

//32


function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}


//33

function findMax(arr) {
  return Math.max(...arr);
}


// 34
function countChar(str, char) {
  return [...str].filter(c => c === char).length;
}


// 35
function splitToWords(str) {
  return str.split(" ");
}


//36
function hasNegative(arr) {
  return arr.some(n => n < 0);
}


// 37
function wordsLengths(arr) {
  return arr.map(w => w.length);
}


// 38
function numsToStrings(arr) {
  return arr.map(String);
}


// 39
function repeatStr(str, n) {
  return str.repeat(n);
}


// 40
function removeLast(arr) {
  return arr.slice(0, -1);
}
