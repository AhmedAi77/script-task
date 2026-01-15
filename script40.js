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

// 41
function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}



// 42
function randomTen() {
  return Math.floor(Math.random() * 10) + 1;
}


// 43
function endsWith(str, char) {
  return str.endsWith(char);
}


// 45
function removeDuplicates(arr) {
  return [...new Set(arr)];
}


// 46
function sortAsc(arr) {
  return [...arr].sort((a, b) => a - b);
}


// 47
function sortDesc(arr) {
  return [...arr].sort((a, b) => b - a);
}


// 48
function isPalindrome(str) {
  let s = str.toLowerCase();
  return s === reverseString(s);
}


// 49
function capitalizeWords(str) {
  return str
    .split(" ")
    .map(w => w[0].toUpperCase() + w.slice(1))
    .join(" ");
}


// 50
function getIntersection(arr1, arr2) {
  return arr1.filter(x => arr2.includes(x));
}

// 51
function decimalToBinary(n) {
  return n.toString(2);
}

// 52
function wordCount(str) {
  return str.trim().split(/\s+/).length;
}

// 53
function replaceWord(str, oldW, newW) {
  return str.replaceAll(oldW, newW);
}

// 54
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++)
    if (n % i === 0) return false;
  return true;
}

// 55
function getNames(users) {
  return users.map(u => u.name);
}

// 56
function calcAge(birthYear) {
  return new Date().getFullYear() - birthYear;
}

// 57
function randomHexColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

// 58
function isSorted(arr) {
  return arr.every((v, i) => i === 0 || arr[i - 1] <= v);
}

// 59
function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

// 60
function sumDigits(n) {
  return [...String(n)].reduce((a, b) => a + +b, 0);
}

// 61
function flattenArray(arr) {
  return arr.flat();
}

// 62
function delay(ms) {
  return new Promise(res => setTimeout(res, ms));
}

// 63
async function fetchData(url) {
  const res = await fetch(url);
  return res.json();
}

// 64
function objectToQueryString(obj) {
  return new URLSearchParams(obj).toString();
}

// 65
function deepEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

// 66
function uniqueOnly(arr) {
  return arr.filter(x => arr.indexOf(x) === arr.lastIndexOf(x));
}

// 67
function chunkArray(arr, size) {
  let res = [];
  for (let i = 0; i < arr.length; i += size)
    res.push(arr.slice(i, i + size));
  return res;
}

// 68
function daysBetween(d1, d2) {
  return Math.abs((new Date(d2) - new Date(d1)) / 86400000);
}

// 69
function debounce(func, wait) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => func(...args), wait);
  };
}

// 70
function camelToSnake(str) {
  return str.replace(/[A-Z]/g, l => "_" + l.toLowerCase());
}

// 71
function mostFrequent(arr) {
  let map = {};
  arr.forEach(x => map[x] = (map[x] || 0) + 1);
  return Object.keys(map).reduce((a, b) => map[a] > map[b] ? a : b);
}

// 72
function maskCard(num) {
  let s = String(num);
  return "*".repeat(s.length - 4) + s.slice(-4);
}

// 73
function isNumeric(str) {
  return /^\d+$/.test(str);
}

console.log(isNumeric("ahmed"))

// 74
function swapCase(str) {
  return [...str].map(c =>
    c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()
  ).join("");
}

// 75
function simpleInterest(p, r, t) {
  return (p * r * t) / 100;
}

// 76
function getKeys(obj) {
  return Object.keys(obj);
}

// 77
function getValues(obj) {
  return Object.values(obj);
}

// 78
function arrayToObject(arr) {
  return Object.assign({}, arr);
}

// 79
function fibonacci(n) {
  let res = [0, 1];
  for (let i = 2; i < n; i++)
    res[i] = res[i - 1] + res[i - 2];
  return res.slice(0, n);
}

// 80
function isPerfectSquare(n) {
  return Number.isInteger(Math.sqrt(n));
}

// 81
function compact(arr) {
  return arr.filter(Boolean);
}

// 82
function arrayDiff(a, b) {
  return a.filter(x => !b.includes(x));
}

// 83
function timeConvert12to24(t) {
  let [time, mod] = t.split(" ");
  let [h, m] = time.split(":");
  h = mod === "PM" && h !== "12" ? +h + 12 : h;
  h = mod === "AM" && h === "12" ? "00" : h;
  return `${h}:${m}`;
}

// 84
function daysUntilYearEnd() {
  let now = new Date();
  let end = new Date(now.getFullYear(), 11, 31);
  return daysBetween(now, end);
}

// 85
function firstMissingPositive(arr) {
  let s = new Set(arr.filter(n => n > 0));
  for (let i = 1; ; i++) if (!s.has(i)) return i;
}

// 86
function wordFrequency(str) {
  let map = {};
  str.split(/\s+/).forEach(w => map[w] = (map[w] || 0) + 1);
  return map;
}

// 87
function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

// 88
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// 89
function toCSV(data) {
  let keys = Object.keys(data[0]);
  return [
    keys.join(","),
    ...data.map(o => keys.map(k => o[k]).join(","))
  ].join("\n");
}

// 90
function formatNumber(n) {
  return n.toLocaleString();
}

// 91
function uniqueRandoms(count, min, max) {
  let set = new Set();
  while (set.size < count)
    set.add(Math.floor(Math.random() * (max - min + 1)) + min);
  return [...set];
}

// 92
function isLeapYear(y) {
  return (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
}

// 93
function getDayName(date) {
  return new Date(date).toLocaleDateString("en-US", { weekday: "long" });
}

// 94
function truncate(str, limit) {
  return str.length > limit ? str.slice(0, limit) + "..." : str;
}

// 95
function distance(x1, y1, x2, y2) {
  return Math.hypot(x2 - x1, y2 - y1);
}

// 96
function maxChar(str) {
  return mostFrequent([...str]);
}

// 97
function hasSubArray(arr) {
  return arr.some(Array.isArray);
}

// 98
function sumOdds(arr) {
  return arr.filter(n => n % 2).reduce((a, b) => a + b, 0);
}

// 100
function toSlug(str) {
  return str.toLowerCase().trim().replace(/\s+/g, "-");
}
