const bWard = document.querySelectorAll(".button");
const modal = document.querySelector(".about_modal");
const aboutBtn = document
  .querySelector(".about")
  .addEventListener("click", function () {
    modal.style.display = "block";
  });
const exitModal = document
  .querySelector(".exit")
  .addEventListener("click", function () {
    modal.style.display = "none";
  });
bWard.forEach((btn) =>
  btn.addEventListener("click", function (e) {
    // location.reload();
    window.location.reload();
  })
);
let img = document.querySelector("img");
let imgLoad = document.querySelector(".animated_bg");
let artist = document.querySelector(".artist");
let title = document.querySelector(".song-title");

window.onload = function () {
  imgLoad.style.display = "none";
};

fetch(
  "https://en.wikipedia.org/w/api.php?action=query&format=json&list=random&formatversion=2&rnlimit=5&rnnamespace=0&origin=*"
)
  .then((res) => res.json())
  .then((data) => {
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
    artist.innerText = trimmed;
  });

fetch("https://api.quotable.io/quotes/random?maxLength=35")
  .then((res) => res.json())
  .then((data) => {
    let quote = data[0].content;
    title.innerText = quote;
  });

let playBar = document.querySelector(".playBar");

playBar.addEventListener("change", function (e) {
  let timeSpan = document.querySelector(".timeChange");
  let val = e.target.value;
  console.log(convertToMinutesAndSeconds(val));
  timeSpan.innerText = convertToMinutesAndSeconds(val);
});

function convertToMinutesAndSeconds(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedMinutes = String(minutes);
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  return `${formattedMinutes}:${formattedSeconds}`;
}
