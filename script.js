myLibrary = [];
function book(title,author,pages,read) {
  let book = {
    title : title,
    author: author,
    pages : pages,
    read : read
  }
  return book
}

function displayBook() {
  let table = document.querySelector("table");
  let tr = document.createElement('tr');
  let title = document.createElement('td');
  let author = document.createElement('td');
  let pages = document.createElement('td');
  let read = document.createElement('td');
  title.textContent = myLibrary[myLibrary.length - 1].title;
  author.textContent = myLibrary[myLibrary.length - 1].author;
  pages.textContent = myLibrary[myLibrary.length - 1].pages;
  read.textContent = myLibrary[myLibrary.length - 1].read;
  tr.className = (title.textContent);
  tr.appendChild(title);
  tr.appendChild(author);
  tr.appendChild(pages);
  tr.appendChild(read);
  table.appendChild(tr);
  addRemoveButton();
}


let addBookButton = document.querySelector('button');
addBookButton.onclick = function() {
  let book = {
  title: prompt('Enter title'),
  author: prompt('Enter Author'),
  pages: prompt('Number of pages'),
  read: prompt('did you read')
  }
  myLibrary.push(book);
  displayBook();
}

function addRemoveButton () {
let remove = document.querySelector(".remove");
let tr_d = document.createElement('tr');
let td_d = document.createElement('td');
let button = document.createElement('button');
button.textContent = 'remove'
button.className = 'remove_button'
let val = document.createAttribute('value');
button.setAttribute('id',myLibrary[myLibrary.length - 1].title);
button.setAttribute('onclick',"removeFunction('" + myLibrary[myLibrary.length - 1].title + "')");
td_d.appendChild(button);
tr_d.appendChild(td_d);
remove.appendChild(tr_d);
}


function removeFunction (val) {
  for(var i in myLibrary){
    if(myLibrary[i].title==val){
      myLibrary.splice(i,1);
      let rbook = document.querySelector("." + CSS.escape(val) + "");
      let rbt = document.querySelector("#" + CSS.escape(val) + "");
      rbook.parentNode.removeChild(rbook);
      rbt.parentNode.removeChild(rbt);
        break;
    }
  }   
  alert(rb);
}



