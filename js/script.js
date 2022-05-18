let songoSSJ = document.querySelector(".songoSSJ");
let songoDuzy = document.querySelector(".songoDuzy");
let songoMaly = document.querySelector(".songoMaly");
let button = document.querySelector(".button");
let photoButtonElement = document.querySelector(".photoButtonElement");
let heightElement = document.querySelector(".js-height");

heightElement.addEventListener("input", () => {
  console.log(`Aktualny wzrost: ${heightElement.value}`);
});

button.addEventListener("click", () => {
  songoSSJ.remove();

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

