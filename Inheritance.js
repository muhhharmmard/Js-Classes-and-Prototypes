//Book Constructor

function Book( title, author, year){
    this.title = title;
    this.author = author;
    this.year = year;
}

Book.prototype.getSummary = function () {
   return `${this.title} was authored by ${this.author} in the year ${this.year}`;
}

Book.prototype.getAge = function(){
    let age = new Date;
    age = age.getFullYear();
    return `${this.title} is ${ age - this.year} years old`;
}
Book.prototype.revise = function (newYear) {
    this.year = newYear;
    this.revised = true;
}

// Create magazine Constructor that inherit from Book constructor

function Magazine ( title, author, year, month){
    Book.call(this, title, author, year);
    this.month = month;
}
// Allow magazine inherit prototypes(the methods) from Book
Magazine.prototype = Object.create(Book.prototype);

const book1 = new Book ( 'Book 1', 'Jane Doe', 2013);
const mag1 = new Magazine ('Mag 1', 'Joseph Yobo', 2013, 'Jan');

//use magazine Constructor
Magazine.prototype.constructor = Magazine;

console.log(mag1)
console.log(book1.getSummary())
console.log(book1)