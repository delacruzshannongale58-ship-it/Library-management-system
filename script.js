let library = [];

function addBorrow(){

    const bookTitle = document.getElementById("bookTitle").value;
    const borrowerName = document.getElementById("borrowerName").value;
    const borrowDate = document.getElementById("borrowDate").value;
    const returnDate = document.getElementById("returnDate").value;

    if(bookTitle=="" || borrowerName=="" || borrowDate=="" || returnDate==""){
        alert("Please fill in all fields.");
        return;
    }

    library.push({
        title: bookTitle,
        borrower: borrowerName,
        borrowDate: borrowDate,
        returnDate: returnDate,
        status: "Borrowed"
    });

    document.getElementById("bookTitle").value="";
    document.getElementById("borrowerName").value="";
    document.getElementById("borrowDate").value="";
    document.getElementById("returnDate").value="";

    displayBooks();
}

function displayBooks(){

    let rows="";

    library.forEach((book,index)=>{

        rows += `
        <tr>

        <td>${book.title}</td>

        <td>${book.borrower}</td>

        <td>${book.borrowDate}</td>

        <td>${book.returnDate}</td>

        <td class="${book.status=="Borrowed" ? "borrowed":"returned"}">
            ${book.status}
        </td>

        <td>

        ${
            book.status=="Borrowed"
            ?
            `<button onclick="returnBook(${index})">Return</button>`
            :
            `<button disabled>Returned</button>`
        }

        </td>

        </tr>
        `;
    });

    document.getElementById("libraryList").innerHTML=rows;

}

function returnBook(index){

    library[index].status="Returned";

    displayBooks();

}
