// Activity 1

//task1
let a = 5
let b = 4
console.log("Addition =", a + b)

//task 2
let num1 = 8
let num2 = 5
console.log("Subtraction =", num1 - num2)

//task 3
let n1 = 25
let n2 = 25
console.log("Multiplication =", n1 * n2)

//task4
let number1 = 20
let number2 = 4
console.log("Division =", number1 / number2)

//task5
let c = 54
let d = 25
console.log("Remainder =", c % d)

//Activity 2
//task6
let originalNum1 = 10
console.log("Original Number 1:", originalNum1)
originalNum1 += 5
console.log("Number 1 after adding 5 to it:", originalNum1)

//task7
let originalNum2 = 10
console.log("Original Number 2:", originalNum2)
originalNum2 -= 5
console.log("Number 2 after subtracting 5 from it:", originalNum2)

//Activity 3
//task8
let x1 = 25
let y1 = 39
if (x1 > y1) {
    console.log(x1, "is greater than", y1)
}
if (x1 < y1) {
    console.log(x1, "is smaller than", y1)
}

//task9
let x2 = 25
let y2 = 39
if (x2 >= y2) {
    console.log(x2, "is greater or equal to", y2)
}
let x3 = 30
let y3 = 30
if (x3 <= y3) {
    console.log(x3, "is smaller or equal to", y3)
}

//task10
let Num1 = 5
let Num2 = "5"

if (Num1 === Num2) {
    console.log("Num1's value and type is equal to Num2")
} else if (Num1 == Num2) {
    console.log("Num1's value is equal to Num2's value but not it's type")
} else {
    console.log("Both are different numbers")
}

//Activity 4
//task11
let x = 5, y = 6, z = 7
if (x > y && x > z) {
    console.log(x, "is greatest")
}
if (y > x && y > z) {
    console.log(y, "is greatest")
}
if (z > y && z > x) {
    console.log(z, "is greatest")
}

//task12 (task11 also included)
let knowEnglish = true
let knowFrench = false
if (knowEnglish && knowFrench) {
    console.log("I know both of the above given langauges.")
} else if (knowEnglish || knowFrench) {
    console.log("I know atleast one of the above given languages.")
} else {
    console.log("I don't know any of the above given languages.")
}

//task13
let string1 = "Manan"
let string2 = "BCA"
if (!(string1 == string2))
    console.log("Both strings are not same")

//Activity 5
//task14

let Num = 55
let negNum = -55
let isPositive = Num>0? "positive" : "negative" 
console.log(`Num ${Num} is ${isPositive}`)
isPositive = negNum>0? "positive" : "negative" 
console.log(`Num ${negNum} is ${isPositive}`)