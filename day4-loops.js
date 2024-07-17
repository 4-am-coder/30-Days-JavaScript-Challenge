//Activity 1
//Task1
for(let i=1; i<=10; i++){
    console.log(i);
}
//Task2
for(let i=1; i<=10; i++){
    console.log("5 x",i, "=", 5*i);
}
//Activity 2
//Task3
let n=1
let sum=0
while(n<=10){
    sum+=n;
    n++;
}
console.log("Sum of numbers 1 to 10 =",sum)
//Task4
let num = 10
while(num!=0){
    console.log(num)
    num--;
}
//Activity 3
//Task5
console.log("Task 5:")
let j=1
do{
    console.log(j)
    j++
} 
while(j<=5)
//Task6
let number = 5
let fact =1;
if(number <0){
    console.log("Please provide a positive number for finding factorial")
} else{
    if(number!=0){
        do{
            fact*=number
            number--;
        } while(number!=0)
    }
    console.log("factorial:", fact)
}

//Activity 4
//Task7
console.log("Pattern:")
let result = ""
for(let i=1; i<=5; i++){
    for(let j=1; j<=i; j++){
        result+="* "
    }
    result+="\n"
}
console.log(result)
//Activity 5
//Task8
for(let i=1; i<=10; i++){
    if(i===5){
        continue;
    } else {
        console.log(i);
    }
}
//Task9
for(let i=1; i<=10; i++){
    if(i===7){
        break;
    }
    console.log(i);
}