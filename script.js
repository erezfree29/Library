const myLibrary = [];

function addRemoveButton() {
  const remove = document.querySelector('.remove');
  const trd = document.createElement('tr');
  const tdd = document.createElement('td');
  const button = document.createElement('button');
  button.textContent = 'remove';
  button.className = 'remove_button';
  button.setAttribute('id', myLibrary[myLibrary.length - 1].title);
  button.setAttribute('onclick', `removeFunction('${myLibrary[myLibrary.length - 1].title}')`);
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
  const readId = `${myLibrary[myLibrary.length - 1].title}read`;
  read.setAttribute('id', readId);
  updateButton.setAttribute('onclick', `updateStatus('${myLibrary[myLibrary.length - 1].title}')`);
  updateButton.textContent = 'update';
  read.appendChild(updateButton);
  tr.className = (title.textContent);
  tr.appendChild(title);
  tr.appendChild(author);
  tr.appendChild(pages);
  tr.appendChild(read);
  table.appendChild(tr);
}

function addBookToLibrary() {
  displayBook();
  addRemoveButton();
}

const addBookButton = document.querySelector('button');
addBookButton.onclick = function addBookButton() {
  const btitle = document.querySelector('.title');
  const bauthor = document.querySelector('.author');
  const bpages = document.querySelector('.pages');
  const bread = document.querySelector('.read');
  const book = {
    title: btitle.value,
    author: bauthor.value,
    pages: bpages.value,
  };
  if (bread.checked === true) {
    book.read = 'yes';
  } else {
    book.read = 'no';
  }
  const info = [];
  if (btitle.value === '') {
    info.push('enter a title');
  }

  if (bauthor.value === '') {
    info.push('enter an author');
  }

  if (bpages.value === '') {
    info.push('enter number of pages');
  }
  if (info.length === 0) {
    myLibrary.push(book);
    addBookToLibrary();
    const alerts = document.querySelectorAll('.alerts');
    [].forEach.call(alerts, (alert) => {
      // do whatever
      alert.remove();
    });
  } else {
    const alertcontent = document.querySelector('.content');
    const infocontent = document.createElement('div');
    infocontent.className = 'alerts';
    infocontent.textContent = info;
    alertcontent.removeChild(alertcontent.lastChild);
    alertcontent.appendChild(infocontent);
  }
};

function removeFunction(val) {
  for (let i = 0; i < myLibrary.length; i += 1) {
    if (myLibrary[i].title === val) {
      myLibrary.splice(i, 1);
      const rbook = document.querySelector(`.${CSS.escape(val)}`);
      const rbt = document.querySelector(`#${CSS.escape(val)}`);
      rbook.parentNode.removeChild(rbook);
      rbt.parentNode.removeChild(rbt);
      break;
    }
  }
}

function updateStatus(val) {
  for (let i = 0; i < myLibrary.length; i += 1) {
    if (myLibrary[i].title === val) {
      const read = document.querySelector(`#${CSS.escape(val)}read`);
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

// for js linters rule
removeFunction();
updateStatus();