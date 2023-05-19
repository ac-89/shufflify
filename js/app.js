fetch(
  "https://en.wikipedia.org/w/api.php?action=query&format=json&list=random&formatversion=2&rnlimit=5&rnnamespace=0"
)
  .then((res) => res.json())
  .then((data) => {
    let artist = document.querySelector(".artist");
    let article = data.query.random[0].title;
    let brIndex = article.indexOf("(");
    let trimmed = article.slice(0, brIndex);
    console.log(trimmed, article);
    artist.innerText = trimmed;
  });

fetch("https://api.quotable.io/quotes/random?maxLength=30")
  .then((res) => res.json())
  .then((data) => {
    // let artist = document.querySelector(".artist");
    // artist.innerText = data.query.random[0].title;
    let quote = data[0].content;
    console.log(quote);
    let title = document.querySelector(".song-title");
    title.innerText = quote;
    // let section = console.log(endIndex);
  });
