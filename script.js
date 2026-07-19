let books = [];
let records = [];

function addBook(){

let title=document.getElementById("title").value;
let author=document.getElementById("author").value;

if(title=="" || author==""){

alert("Fill all fields");
return;

}

books.push({

title:title,
author:author,
status:"Available"

});

document.getElementById("title").value="";
document.getElementById("author").value="";

displayBooks();

}

function displayBooks(){

let table=document.getElementById("bookTable");
table.innerHTML="";

let select=document.getElementById("borrowBook");
select.innerHTML="";

books.forEach((book,index)=>{

table.innerHTML+=`

<tr>

<td>${book.title}</td>

<td>${book.author}</td>

<td class="${book.status=="Available"?"available":"borrowed"}">${book.status}</td>

<td>

<button onclick="deleteBook(${index})">Delete</button>

</td>

</tr>

`;

if(book.status=="Available"){

select.innerHTML+=`

<option value="${index}">

${book.title}

</option>

`;

}

});

}

function deleteBook(index){

books.splice(index,1);

displayBooks();

}

function borrowBook(){

let bookIndex=document.getElementById("borrowBook").value;

let borrower=document.getElementById("borrower").value;

let borrowDate=document.getElementById("borrowDate").value;

let returnDate=document.getElementById("returnDate").value;

if(borrower==""){

alert("Enter borrower");

return;

}

books[bookIndex].status="Borrowed";

records.push({

book:books[bookIndex].title,

borrower:borrower,

borrowDate:borrowDate,

returnDate:returnDate,

status:"Borrowed"

});

document.getElementById("borrower").value="";

displayBooks();

displayRecords();

}

function displayRecords(){

let table=document.getElementById("recordTable");

table.innerHTML="";

records.forEach((record,index)=>{

table.innerHTML+=`

<tr>

<td>${record.book}</td>

<td>${record.borrower}</td>

<td>${record.borrowDate}</td>

<td>${record.returnDate}</td>

<td>${record.status}</td>

<td>

${record.status=="Borrowed"

?

`<button onclick="returnBook(${index})">

Return

</button>`

:"Returned"}

</td>

</tr>

`;

});

}

function returnBook(index){

records[index].status="Returned";

let book=books.find(b=>b.title==records[index].book);

if(book){

book.status="Available";

}

displayBooks();

displayRecords();

}

function searchBook(){

let input=document.getElementById("search").value.toLowerCase();

let rows=document.getElementById("bookTable").getElementsByTagName("tr");

for(let i=0;i<rows.length;i++){

let title=rows[i].cells[0].innerText.toLowerCase();

rows[i].style.display=title.includes(input)?"":"none";

}

}
