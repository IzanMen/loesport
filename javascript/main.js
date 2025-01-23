fetch("https://openlibrary.org/search.json?q=harry+potter")
  .then(response => response.json())
  .then(data => console.log(data));
