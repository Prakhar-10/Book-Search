const getBooks = () =>{
    fetch("books.json")
    .then(function(response){
        return response.json();
    })
    .then(function(books){
        console.log(books);
        let placeholder = document.querySelector("#table-all-books");
        let out = "";
        for(let book of books){
            out += `
                <tr>
                    <td>${book.BookId}</td>
                    <td>${book.Genre}</td>
                    <td>${book.Price}</td>
                    <td>${book.Examine}</td>
                </tr>
            `;

        }
        placeholder.innerHTML += out;
    })
}

const getSimilarBooks = () =>{
    fetch("books.json")
    .then(function(response){
        return response.json();
    })
    .then(function(books){
        console.log(books);
        let placeholder = document.querySelector("#table-similar-books");
        let out = "";
        for(let book of books){
            out += `
                <tr>
                    <td>${book.BookId}</td>
                    <td>${book.Genre}</td>
                    <td>${book.Price}</td>
                    <td>${book.Examine}</td>
                </tr>
            `;

        }
        placeholder.innerHTML += out;
    })
}

const searchGenre = () => {
    let input = document.getElementById("input-search-genre");
    let filter = input.value.toUpperCase();
    let table = document.getElementById("table-similar-books");
    let tr = table.getElementsByTagName("tr");

    for(let i=0;i<tr.length;i++){
        let td = tr[i].getElementsByTagName('td')[1];
        if(td){
            let textVal = td.textContent || td.innerHTML;
            if(textVal.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = ""; 
            }else{
                tr[i].style.display = "none";
            }
        }
    }
    
}

const searchID = () => {
    let input = document.getElementById("input-search-id");
    let filter = input.value;
    let table = document.getElementById("table-similar-books");
    let tr = table.getElementsByTagName("tr");

    for(let i=0;i<tr.length;i++){
        let td = tr[i].getElementsByTagName('td')[0];
        if(td){
            let textVal = td.textContent || td.innerHTML;
            if(textVal.indexOf(filter) > -1){
                tr[i].style.display = "";
            }else{
                tr[i].style.display = "none";
            }
        }
    }
}

const searchPrice = () => {
    let input = document.getElementById("input-search-price");
    let filter = input.value.toUpperCase();
    let table = document.getElementById("table-similar-books");
    let tr = table.getElementsByTagName("tr");

    for(let i=0;i<tr.length;i++){
        let td = tr[i].getElementsByTagName('td')[2];
        if(td){
            let textVal = td.textContent || td.innerHTML;
            if(textVal.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = "";
            }else{
                tr[i].style.display = "none";
            }
        }
    }
   
}

const displayPrice = () =>{
    fetch("books.json")
    .then(function(response){
        return response.json();
    })
    .then(function(books){
        let input = document.getElementById("input-search-price");
        let placeholder = document.querySelector(".c-price");
        let idSpan = document.querySelector(".c-book");
        let genreSpan = document.querySelector(".c-genre");
        let priceInp = "";
        let idInp = "";
        let genreInp = "";
        for(let book of books){
            if(book.Price == input.value){
                priceInp += `<span>${book.Price}</span>`;
                idInp += `<span>${book.BookId}</span>`;
                genreInp+= `<span>${book.Genre}</span>`;
            }
        }
        placeholder.innerHTML = priceInp;
        idSpan.innerHTML = idInp;
        genreSpan.innerHTML = genreInp;
    })
}

const displayGenre = () =>{
    fetch("books.json")
    .then(function(response){
        return response.json();
    })
    .then(function(books){
        let input = document.getElementById("input-search-genre");
        let priceSpan = document.querySelector(".c-price");
        let idSpan = document.querySelector(".c-book");
        let genreSpan = document.querySelector(".c-genre");
        let priceInp = "";
        let idInp = "";
        let genreInp = "";
        for(let book of books){
            if(book.Genre === input.value){
                priceInp += `<span>${book.Price}</span>`;
                idInp += `<span>${book.BookId}</span>`;
                genreInp+= `<span>${book.Genre}</span>`;
                break;
            }
        }
        priceSpan.innerHTML = priceInp;
        idSpan.innerHTML = idInp;
        genreSpan.innerHTML = genreInp;
    })
}

const displayId = () =>{
    fetch("books.json")
    .then(function(response){
        return response.json();
    })
    .then(function(books){
        let input = document.getElementById("input-search-id");
        let priceSpan = document.querySelector(".c-price");
        let idSpan = document.querySelector(".c-book");
        let genreSpan = document.querySelector(".c-genre");
        let priceInp = "";
        let idInp = "";
        let genreInp = "";
        for(let book of books){
            if(book.BookId == input.value){
                priceInp += `<span>${book.Price}</span>`;
                idInp += `<span>${book.BookId}</span>`;
                genreInp+= `<span>${book.Genre}</span>`;
                break;
            }
        }
        priceSpan.innerHTML = priceInp;
        idSpan.innerHTML = idInp;
        genreSpan.innerHTML = genreInp;
    })
}

getSimilarBooks();
getBooks();
