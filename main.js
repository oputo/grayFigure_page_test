
const baseHtml = document.querySelector('.spreadsheets--item.js-base');
const spreadsheets = document.querySelector('.spreadsheets');

//const apiURL = 'https://script.google.com/macros/s/AKfycbyW5D6EU7IlgLh-zH715C6AuOHH4Ziuvrz3Cmu8FEztWOQOPjyKOe8zRkOyhhrOX6qcBw/exec';

// getJsonData.gs
const apiURL = 'https://script.google.com/macros/s/AKfycbzaj9gyJlqevaucft27tal26iC4AtG9Q8VsuTVinsvUWetJmTUHcuQxNIHBu-PyJiQQ/exec';

async function loadData() {
  const response = await fetch(apiURL);
  const data = await response.json();

  data.forEach(entry => {
    const copy = baseHtml.cloneNode(true);
    copy.classList.remove('js-base');
    copy.querySelector('.spreadsheets--name').textContent = entry.name;
    copy.querySelector('.spreadsheets--age').textContent = entry.age;
    copy.querySelector('.spreadsheets--img').src = entry.image;
    spreadsheets.appendChild(copy);
  });

}

loadData();



