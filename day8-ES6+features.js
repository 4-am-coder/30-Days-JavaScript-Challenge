// Activity 1
// Task1
let my_name = "manan"
let age = 21
console.log(`My name is ${my_name} and my age is ${age}`);
// Task2
console.log(`My name is ${my_name}.\nAnd my age is ${age}.`);
// Activity 2
// Task3
const numbers = [1,2,3,4,5,6,7,8]
console.log(numbers);
const [number1, number2] = numbers
console.log(number1, number2);
// Task4
const book= {
    title: 'Tempest',
    author: 'William Shakespeare',
    price: 450
}
const {title, author} = book
console.log(title,",", author);
// Activity 3
// Task5
const newNumbers = [...numbers, 9 , 10]
console.log(newNumbers);
// Task6
function sum(...numbers){
    sum=0
    numbers.forEach(number => {
        sum+= number
    });
    return sum
}
console.log(sum(2,3,4,5,3,9,10)); 
// Activity 4
// Task7
const product = (a,b=1)=>{
    return a*b;
}
console.log("Calling with only 1 parameter:", product(4));
console.log("Calling with 2 parameters:", product(5,2));
// Activity 5
// Task8
const Sum ={
    a: 5,
    b: 6,
    calcSum: (a,b) =>{
        return a+b
    }
}
console.log(Sum.a, Sum.b, Sum.calcSum(5,6));
console.log(Sum);
// Task9
let language ="English"
const attribute = "age"
const stud={
    name: "manan",
    [attribute]: 20,
    [`marksIn${language}`]: 97
}
console.log(stud.marksInEnglish);
console.log(stud.age);
