//Activity 1
//Task1
let numbers = [1,2,3,4,5]
console.log(numbers);
//Task2
console.log("First Number:",numbers[0],", Second Number:",numbers[4]);
//Activity 2
//Task3
numbers.push(6)
console.log(numbers);
//Task4
numbers.pop()
console.log(numbers);
//Task5
numbers.shift()
console.log(numbers)
//Task6
numbers.unshift(1)
console.log(numbers)
//Activity 3
//Task7
console.log(numbers.map((num)=> num*2));
//Task8
console.log(numbers.filter((num)=> num%2===0))
//Task9
console.log(numbers.reduce((acc,curr)=> acc+curr , 0))
//Activity 4
//Task10
for(let i=0; i<5; i++){
    console.log("Element at index=", i , "=", numbers[i]);
}
//OR
for(const key in numbers){
    console.log("Element at key=", key , "=", numbers[key]);
}
//Task11
numbers.forEach((i) => console.log(i))
//Activity 5
//Task12
const two_d_array = [[1,2,3],[4,5,6],[7,8,9]]
console.log("Array Form:",two_d_array);
let matrixString =""
for(let i=0; i<3; i++){
    for(let j=0; j<3; j++){
        matrixString=matrixString+two_d_array[i][j]+ " ";
    }
    matrixString+="\n"
}
console.log("Matrix Form:");
console.log(matrixString);
//Task13
console.log(two_d_array[1][2]);