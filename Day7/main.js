// Day 7
// Question no 1 (OOP related)
// Create a typescript class Book that has properties for title,author,publicationYear , and genre. The class should have methods to:
// 1: Display the book details
// 2: Check if the book is a recent publication (wwithin the last 5 years).
// 3: Change the genre of the book.
//4: Check if the book's author matches a given name.
var Book = /** @class */ (function () {
    function Book(title, author, publicationYear, genre) {
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
        this.genre = genre;
    }
    // Method to display book details
    Book.prototype.displayDetails = function () {
        console.log("Title: ".concat(this.title));
        console.log("Author: ".concat(this.author));
        console.log("Publication Year: ".concat(this.publicationYear));
        console.log("Genre: ".concat(this.genre));
    };
    // Method to check if the book is a recent publication
    Book.prototype.isRecentPublication = function () {
        var currentYear = new Date().getFullYear();
        return currentYear - this.publicationYear <= 5;
    };
    // Method to change the genre of the book
    Book.prototype.changeGenre = function (newGenre) {
        this.genre = newGenre;
        console.log("Genre of ".concat(this.title, " has been changed to ").concat(this.genre, "."));
    };
    // Method to check if the book's author matches a given name
    Book.prototype.doesAuthorMatch = function (name) {
        return this.author.toLowerCase() === name.toLowerCase();
    };
    return Book;
}());
// Test the Book class with a Pakistani book and author
var book1 = new Book("Exit West", "Mohsin Hamid", 2017, "Fiction");
book1.displayDetails();
console.log("Is recent publication: ".concat(book1.isRecentPublication()));
book1.changeGenre("Drama");
console.log("Does author match 'Mohsin Hamid': ".concat(book1.doesAuthorMatch("Mohsin Hamid")));
// Function to find a person by city
function findPersonByCity(people, city) {
    for (var _i = 0, people_1 = people; _i < people_1.length; _i++) {
        var person = people_1[_i];
        for (var _a = 0, _b = person.addresses; _a < _b.length; _a++) {
            var address = _b[_a];
            if (address.city === city) {
                return { name: person.name, email: person.email };
            }
        }
    }
    return undefined;
}
// Test the function with a list of people with Pakistani addresses
var people = [
    {
        name: "Aisha Khan",
        age: 35,
        email: "aishakhan@example.com",
        phone: "03012345678",
        addresses: [
            { street: "123 A Street", city: "Karachi", state: "SD", zipcode: "74200" },
            { street: "456 B Road", city: "Lahore", state: "PB", zipcode: "54000" }
        ]
    },
    {
        name: "Sana Ali",
        age: 29,
        email: "sanaali@example.com",
        phone: "03123456789",
        addresses: [
            { street: "789 C Avenue", city: "Islamabad", state: "IS", zipcode: "44000" },
            { street: "101 D Street", city: "Rawalpindi", state: "PB", zipcode: "46000" }
        ]
    },
];
console.log(findPersonByCity(people, "Karachi")); // Output: { name: 'Aisha Khan', email: 'aishakhan@example.com' }
// for undefined
console.log(findPersonByCity(people, "Delhi")); // Output: undefined
