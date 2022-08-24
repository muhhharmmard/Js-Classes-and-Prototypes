//Having multiple classes

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary() {
        return `${this.title} was authored by ${this.author} in the year ${this.year}`;

    }
    getAge() {
        let age = new Date;
        age = age.getFullYear();
        return `${this.title} is ${ age - this.year} years old`;
    }
}

// Magine Subclass that has the property of Book
class Magazine extends Book {
    constructor(title, author, year, month) {
        super (title, author, year);
        this.month = month;
    }
}

const book1 = new Book ( 'Book 1', 'Jane Doe', 2013);
const mag1 = new Magazine ('Mag 1', 'Joseph Yobo', 2013, 'Jan');

console.log(book1)
console.log(mag1)