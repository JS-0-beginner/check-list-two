/// node 3.books.js \\\

console.log('');

const pages1stBook = 100;
const pages2ndBook = 200;
const pages3rdBook = 300;

function requiredPapers(book1, book2, book3)
{
    let firstBook = book1 * pages1stBook;

    let secondBook = book2 * pages2ndBook;

    let thirdBook = book3 * pages3rdBook;

    let totalpages = firstBook + secondBook + thirdBook;

    return totalpages;
    
}

let totalBookPages = requiredPapers(3,5,6);
console.log('Only',totalBookPages,'Pages for three books.');