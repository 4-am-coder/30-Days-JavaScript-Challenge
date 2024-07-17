// Activity 1
//Task1
function evenOrOdd(num){
    if(num%2===0){
        return "Even"
    } else {
        return "Odd"
    }
}
console.log(evenOrOdd(6))
//Task2
function square(num){
    return num*num
}
console.log(square(9))
// Activity 2
//Task3
let max = function(a,b){
    if(a>b){
        return a
    } else {
        return b
    }
}
console.log(max(5,9))
//Task4
let concate = function(str1, str2){
    return str1+" "+str2
}
console.log(concate("HY, MY NAME IS", "MANAN"));
// Activity 3
//Task5
const sum = (a,b) => (a+b)
console.log(sum(5,9));
//Task6
const check = (str, char) => {
    for(let i=0; i<str.length; i++){
        if (str[i]===char){
            return true
        }
    }
    return false
}
console.log(check("Manan", 'a'));
// Activity 4
//Task7
const product = (a,b=6) => {
    return a*b
}
console.log(product(5));
//Task8
const greeting = (Name, age=18) => {
    return `Hello ${Name}, Welcome! Your Entered Age is ${age}.`
}
console.log(greeting("Manan"));
// Activity 5
//Task9
function xTimes (fn1, count) {
    for(let i=1; i<=count; i++){
        fn1();
    }
}
function greet (){
    console.log("GOOD MORNING");
}
xTimes(greet, 8)
//Task10
function multiplyFiveAndAddTen(fn1, fn2, value) {
    return fn1(fn2(value))
}
function multiplyFive(value){
    return value*5
}
function AddTen(value){
    return value+10
}
console.log(multiplyFiveAndAddTen(AddTen,multiplyFive,9));