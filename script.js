const myLibrary = [];

function addRemoveButton() {
  const remove = document.querySelector('.remove');
  const trd = document.createElement('tr');
  let tdd = document.createElement('td');
  const button = document.createElement('button');
  button.textContent = 'remove';
  button.className = 'remove_button';
  button.setAttribute('id',myLibrary[myLibrary.length - 1].title);
  button.setAttribute('onclick', "removeFunction('" + myLibrary[myLibrary.length - 1].title + "')");
  tdd.appendChild(button);
  trd.appendChild(tdd);
  remove.appendChild(trd);
  }
  
function displayBook() {
  const table = document.querySelector('table');
  const tr = document.createElement('tr');
  const title = document.createElement('td');
  const author = document.createElement('td');
  const pages = document.createElement('td');
  const read = document.createElement('td');
  title.textContent = myLibrary[myLibrary.length - 1].title;
  author.textContent = myLibrary[myLibrary.length - 1].author;
  pages.textContent = myLibrary[myLibrary.length - 1].pages;
  read.textContent = myLibrary[myLibrary.length - 1].read;
  const updateButton = document.createElement('button');
  read.setAttribute('id',myLibrary[myLibrary.length - 1].title + "read");
  updateButton.setAttribute('onclick', "updateStatus('" + myLibrary[myLibrary.length - 1].title + "')");
  updateButton.textContent = 'update';
  read.appendChild(updateButton);
  tr.className = (title.textContent);
  tr.appendChild(title);
  tr.appendChild(author);
  tr.appendChild(pages);
  tr.appendChild(read);
  table.appendChild(tr);
  addRemoveButton();
}

const addBookButton = document.querySelector('button');
addBookButton.onclick = function () {
    const book = {
    title: prompt('Enter title'),
    author: prompt('Enter Author'),
    pages: prompt('Number of pages'),
  }
    let read = prompt('read?').toLocaleLowerCase();
    while (read !== 'yes' && read !== 'no') {
      read = prompt('read?').toLocaleLowerCase();
    }
  book.read = read;
  myLibrary.push(book);
  displayBook();
}

function removeFunction(val) {
  for (var i in myLibrary) {
    if (myLibrary[i].title==val){
      myLibrary.splice(i,1);
      const rbook = document.querySelector("." + CSS.escape(val) + "");
      let rbt = document.querySelector("#" + CSS.escape(val) + "");
      rbook.parentNode.removeChild(rbook);
      rbt.parentNode.removeChild(rbt);
      break;
    }
  }   
}

function updateStatus(val) {
  for (let i in myLibrary) {
    if (myLibrary[i].title === val) {
      const read = document.querySelector("#" + CSS.escape(val) + "read" + "");
      if (read.firstChild.textContent === 'yes') {
        read.firstChild.textContent = 'no';
        myLibrary[i].read = 'no';
      } else {
        read.firstChild.textContent = 'yes';
        myLibrary[i].read = 'no';
      }
      break;
    }
  }   
}