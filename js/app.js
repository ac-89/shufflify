const bWard = document.querySelectorAll(".fa");
bWard.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    // location.reload();
    window.location.reload();
  })
);
let img = document.querySelector("img");
let imgLoad = document.querySelector(".animated_bg");
let titleLoad = document.querySelector(".animated_bg_title");
// let imgLoad = document.querySelector(".animated_bg");
let artist = document.querySelector(".artist");
let title = document.querySelector(".song-title");

window.onload = function () {
  imgLoad.style.display = "none";
  titleLoad.style.display = "none";
};

fetch(
  "https://en.wikipedia.org/w/api.php?action=query&format=json&list=random&formatversion=2&rnlimit=5&rnnamespace=0&origin=*"
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    Array.from(data).filter(
      (f) =>
        typeof f.query.random.title[0] != "number" ||
        f.query.random.title.startsWith("List")
    );

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
    title.innerText = quote;
  });
