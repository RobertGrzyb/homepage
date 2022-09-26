let songoSSJ = document.querySelector(".js-songoSSJ");
let songoDuzy = document.querySelector(".songoDuzy");
let songoMaly = document.querySelector(".songoMaly");
let button = document.querySelector(".js-button");
let photoButtonElement = document.querySelector(".photoButtonElement");

function double(number) {
  return number * 2;
}

console.log(double(5));
console.log(double(40));
console.log(double(40));

button.addEventListener("click", () => {
  songoSSJ.classList.toggle("hidden");
  button.innerText = songoSSJ.classList.contains("hidden") ? "Pokaż zdjęcie" : "Ukryj zdjęcie";
});

photoButtonElement.addEventListener("click", () => {
  songoMaly.classList.toggle("Hide");
  songoDuzy.classList.toggle("Hide");
  
});

let btn = document.querySelector (".theme__button");
let body = document.querySelector (".body")

btn.addEventListener("click", () => {
    body.classList.toggle("nightMode");
    if (body.classList.contains("nightMode")) {
      btn.innerText = "Jasny motyw";
    } else {
      btn.innerText = "Ciemny motyw";
    }
});

