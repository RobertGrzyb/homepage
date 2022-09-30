let selfie = document.querySelector(".js-selfie");
let songoDuzy = document.querySelector(".songoDuzy");
let songoMaly = document.querySelector(".songoMaly");
let button = document.querySelector(".js-button");
let photoButtonElement = document.querySelector(".photoButtonElement");

button.addEventListener("click", () => {
  selfie.classList.toggle("hidden");
  button.innerText = selfie.classList.contains("hidden") ? "Pokaż zdjęcie" : "Ukryj zdjęcie";
});

photoButtonElement.addEventListener("click", () => {
  songoMaly.classList.toggle("hide");
  songoDuzy.classList.toggle("hide");
  
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

