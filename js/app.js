const bWard = document.querySelector("fa-stpe-backward");
const fWard = document.querySelector("fa-step-forward");

fetch(
  "https://en.wikipedia.org/w/api.php?action=query&format=json&list=random&formatversion=2&rnlimit=5&rnnamespace=0&origin=*"
  // {
  //   headers: {
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Headers": "*",
  //   },
  // }
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    let artist = document.querySelector(".artist");
    let article = data.query.random[0].title;
    let brIndex = () => {
      if (article.split("").includes("(")) {
        return article.indexOf("(");
      }
    };
    let trimmed = article.slice(0, brIndex());
    console.log(trimmed, article, brIndex());
    artist.innerText = trimmed;
  });

fetch("https://api.quotable.io/quotes/random?maxLength=35")
  .then((res) => res.json())
  .then((data) => {
    let quote = data[0].content;
    console.log(quote);
    let title = document.querySelector(".song-title");
    title.innerText = quote;
  });
