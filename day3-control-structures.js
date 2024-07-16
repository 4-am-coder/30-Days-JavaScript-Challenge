//Activity 1
//Task1

let num = 10
if(num>0){
    console.log("Positive number")
} else if(num<0){
    console.log("Negative Number")
} else {
    console.log("Number is zero")
}

//Task2
const age = 25
if(age>=18){
    console.log("Eligible to vote")
} else {
    console.log("Not eligible to vote")
}
//Activity 2
//Task3
let a = 5, b=6, c=7
if(a>b && a>c){
    console.log(a,"is largest")
} else if (b>c){
    console.log(b, "is largest")
} else {
    console.log(c, "is largest")
}

//Activity 3
//Task4
let day =7
switch (day) {
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wednesday")
        break;
    case 4:
        console.log("Thursday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;

    default:
        console.log("Wrong Input")
        break;
}
//Task5
let marks =70
// marks from 51 to 60 = grade E
// marks from 61 to 70 = grade D
// marks from 71 to 80 = grade C
// marks from 81 to 90 = grade B
// marks from 91 to 100 = grade A
let marksRange = Math.floor((marks-1)/10)
switch(marksRange){
    case 5:
        console.log("Grade: E")
        break;
    case 6:
        console.log("Grade: D")
        break;
    case 7:
        console.log("Grade: C")
        break;
    case 8:
        console.log("Grade: B")
        break;
    case 9:
        console.log("Grade: A")
        break;
    default:
        console.log("Either wrong input or marks are <=50")
}

//Activity 4
//Task6
let number = 9
let posOrNeg = (number%2 ===0) ? "even" : "odd"
console.log(posOrNeg)

//Activity 5
let year = 2025
if(year%100 === 0){
    if(year%400 === 0){
        console.log("leap year")
    } else {
        console.log("not leap year")
    }
} else if (year %4 === 0){
    console.log("Leap Year")
} else {
    console.log("Not Leap Year")
}