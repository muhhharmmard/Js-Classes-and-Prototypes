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
    return `${this.title} is ${ age - this.year} years old`
}
Book.prototype.revise = function (newYear) {
    this.year = newYear;;
    this.revised = true;
}

const book1 = new Book ( 'Book 1', 'Jane Doe', 2013);
const book2 = new Book ( 'Book 2','Jane Doe', 2016)

// The method is now stored in the propotype
console.log(book1);
console.log(book2);
console.log(book1.getSummary())
console.log(book2.getSummary())
book1.revise(2015)
console.log( book1)
console.log(book2)