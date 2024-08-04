// Day 7

// Question no 1 (OOP related)

// Create a typescript class Book that has properties for title,author,publicationYear , and genre. The class should have methods to:
// 1: Display the book details
// 2: Check if the book is a recent publication (wwithin the last 5 years).
// 3: Change the genre of the book.
//4: Check if the book's author matches a given name.


class Book {
    title: string;
    author: string;
    publicationYear: number;
    genre: string;

    constructor(title: string, author: string, publicationYear: number, genre: string) {
        this.title = title;
        this.author = author;
        this.publicationYear = publicationYear;
        this.genre = genre;
    }

    // Method to display book details
    displayDetails(): void {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Publication Year: ${this.publicationYear}`);
        console.log(`Genre: ${this.genre}`);
    }

    // Method to check if the book is a recent publication
    isRecentPublication(): boolean {
        const currentYear = new Date().getFullYear();
        return currentYear - this.publicationYear <= 5;
    }

    // Method to change the genre of the book
    changeGenre(newGenre: string): void {
        this.genre = newGenre;
        console.log(`Genre of ${this.title} has been changed to ${this.genre}.`);
    }

    // Method to check if the book's author matches a given name
    doesAuthorMatch(name: string): boolean {
        return this.author.toLowerCase() === name.toLowerCase();
    }
}

// Test the Book class with a Pakistani book and author
let book1 = new Book("Exit West", "Mohsin Hamid", 2017, "Fiction");
book1.displayDetails();
console.log(`Is recent publication: ${book1.isRecentPublication()}`);
book1.changeGenre("Drama");
console.log(`Does author match 'Mohsin Hamid': ${book1.doesAuthorMatch("Mohsin Hamid")}`);

// Question no 2 (Nested object with interfaces)

// Create an interface Person that includes properties for name,age,email,phone and addresses . The addresses property shold be an array of objects , each containing street,city,state and zipcode.Write a function to find the first person living in a specific city and return name and email.

interface Person {
    name: string;
    age: number;
    email: string;
    phone: string;
    addresses: Address[];
}

interface Address {
    street: string;
    city: string;
    state: string;
    zipcode: string;
}

// Function to find a person by city
function findPersonByCity(people: Person[], city: string): { name: string, email: string } | undefined {
    for (let person of people) {
        for (let address of person.addresses) {
            if (address.city === city) {
                return { name: person.name, email: person.email };
            }
        }
    }
    return undefined;
}

// Test the function with a list of people with Pakistani addresses
let people: Person[] = [
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

