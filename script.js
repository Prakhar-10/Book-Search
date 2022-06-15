const getBooks= () =>{
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

const getSimilarBooks= () =>{
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

const searchGenre= () => {
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

const searchID= () => {
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

const searchPrice= () => {
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

const display = () =>{
    let table = document.getElementById("table-similar-books");
    let tr = table.getElementsByTagName("tr");
    
    let idspan = document.querySelector(".c-book");
    let inid = `<span>${tr[1].getElementsByTagName("td")[0].innerText}</span>`;
    idspan.innerHTML = inid;

    let pspan = document.querySelector(".c-price");
    let inp = `<span>${tr[1].getElementsByTagName("td")[2].innerText}</span>`;
    pspan.innerHTML = inp;

    let gspan = document.querySelector(".c-genre");
    let ingen = `<span>${tr[1].getElementsByTagName("td")[1].innerText}</span>`;
    gspan.innerHTML = ingen;
    
}


getSimilarBooks();
getBooks();
