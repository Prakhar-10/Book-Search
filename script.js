const getBooks = (selector) => {
    fetch('books.json').then((response) => {
        return response.json();
    }).then((books) => {
        let placeholder = document.querySelector(selector);
        let out = '';
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

const search = (searchClass, rowIdx) => {
    let input = document.querySelector(searchClass);
    let filter = input.value.toUpperCase();
    let table = document.querySelector('.js-table-similar-books');
    let tr = table.getElementsByTagName('tr');

    for(let i=0;i<tr.length;i++){
        let td = tr[i].getElementsByTagName('td')[rowIdx];
        if(td){
            let textVal = td.textContent || td.innerHTML;
            if(textVal.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display = ''; 
            }else{
                tr[i].style.display = 'none';
            }
        }
    }
}

const display = (inputName, inputClass) => {
    fetch('books.json').then((response) => {
        return response.json();
    }).then((books) => {
        let input = document.querySelector(inputClass);
        let inputObject = {
            price: '',
            id: '',
            genre: '',
        };
        for(let book of books){
            if(book[inputName] === input.value){
                inputObject.price += `<span>${book.Price}</span>`;
                inputObject.id += `<span>${book.BookId}</span>`;
                inputObject.genre += `<span>${book.Genre}</span>`;
                break;
            }
        }
        document.querySelector('.c-price').innerHTML = inputObject.price;
        document.querySelector('.c-book').innerHTML = inputObject.id;
        document.querySelector('.c-genre').innerHTML = inputObject.genre;
    })
}

const sort = (ifAsc) => {
    let table, rows, sorted, sortFlag, idx;
    table = document.querySelector('.js-table-all-books');
    sorted = true;
    while (sorted) {
        sorted = false;
        rows = table.rows;
        for (idx = 1; idx < rows.length - 1; idx++) {
            sortFlag = false;
            let firstValue = rows[idx].getElementsByTagName('td')[2];
            let secondValue = rows[idx + 1].getElementsByTagName('td')[2];
            if(ifAsc){
                if (parseInt(firstValue.innerHTML) > parseInt(secondValue.innerHTML)) {
                    sortFlag = true;
                    break;
                 }
            }else{
                if(parseInt(firstValue.innerHTML) < parseInt(secondValue.innerHTML)){
                    sortFlag = true;
                    break;
                }
            }
        }
        if (sortFlag) {
            rows[idx].parentNode.insertBefore(rows[idx + 1], rows[idx]);
            sorted = true;
        }
    }
} 

getBooks('.js-table-all-books');
getBooks('.js-table-similar-books');
