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

const book1 = new Book ( 'Book 1', 'Jane Doe', 2013);
console.log(book1)
console.log(book1.getAge())