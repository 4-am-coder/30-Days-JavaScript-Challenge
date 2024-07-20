//Activity 1
//Task1
const book ={
    title: "The Tempest",
    author: "William Shakespeare",
    year: 2018,
    returnTitleandAuthor(){
        return `Title: ${this.title} , Author: ${this.author}`
    },
    updateYear(year){
        this.year = year
    },
    returnTitleandYear(){
         return `Title: ${this.title} , Year: ${this.year}`
    }
}
console.log(book);
//Task2
console.log(book.title, book.author);
//Activity 2
//Task3
console.log(book.returnTitleandAuthor());
//Task4
book.updateYear(2020)
console.log(book.year);
//Activity 3
//Task5
const library ={
    name: "Xyz Library",
    books: [
        {
            title:"book1",
            price: 100
        },
        {
            title:"book2",
            price: 200
        }
    ]
}
console.log(library);
//Task6
console.log(library.name);
library.books.forEach(book => {
    console.log(book.title);
});
//Activity 4
//Task7
console.log(book.returnTitleandYear());
//Activity 5
//Task8
console.log("Accessing all properties using for in loop:");
for (const key in book) {
    console.log(`${key} : ${book[key]}`);
}
//Task9
console.log("All keys using for of loop:");
for (const key of Object.keys(book)) {
    console.log(key);
}
console.log("All values using for of loop:");
for (const key of Object.values(book)) {
    console.log(key);
}