let songoSSJ = document.querySelector(".songoSSJ");
let songoDuzy = document.querySelector(".songoDuzy");
let songoMaly = document.querySelector(".songoMaly");
let button = document.querySelector(".button");
let photoButtonElement = document.querySelector(".photoButtonElement");
let heightElement = document.querySelector(".js-height");

function double(number) {
  return number * 2;
}

console.log(double(5));
console.log(double(40));
console.log(double(40));

heightElement.addEventListener("input", () => {
  console.log(`Aktualny wzrost i waga małego człowieczka: ${heightElement.value}`);
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

