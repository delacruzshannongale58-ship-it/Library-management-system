let books = JSON.parse(localStorage.getItem("books")) || [];

displayBooks();

function addBook(){

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;

    if(title=="" || author==""){
        alert("Please complete the information.");
        return;
    }

    books.push({
        title:title,
        author:author
    });

    localStorage.setItem("books",JSON.stringify(books));

    document.getElementById("title").value="";
    document.getElementById("author").value="";

    displayBooks();
}

function displayBooks(){

    let list=document.getElementById("bookList");

    list.innerHTML="";

    books.forEach((book,index)=>{

        list.innerHTML+=`
        <tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>
                <button class="delete" onclick="deleteBook(${index})">
                Delete
                </button>
            </td>
        </tr>
        `;
    });
}

function deleteBook(index){

    books.splice(index,1);

    localStorage.setItem("books",JSON.stringify(books));

    displayBooks();
}

function searchBook(){

    let keyword=document.getElementById("search").value.toLowerCase();

    let rows=document.querySelectorAll("#bookList tr");

    rows.forEach(row=>{

        let text=row.innerText.toLowerCase();

        if(text.includes(keyword)){
            row.style.display="";
        }
        else{
            row.style.display="none";
        }

    });

}
