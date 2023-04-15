let myInput = document.createElement("input");
myInput.setAttribute("type", "number");

let myButton = document.createElement("button");
myButton.innerText = "Показать";

let result = document.createElement("h1");
result.innerText = "";

let body = document.querySelector("body");
body.appendChild(myInput);
body.appendChild(myButton);
body.appendChild(result);

myButton.addEventListener("click", function () {
  let age = myInput.value;
  let price = 100;

  if (age < 8) {
    price = 0;
  } else if (age <= 20) {
    price = price * 0.8;
  } else if (age > 20) {
    price = price;
  }

  result.innerText = `Цена равна: ${price}`;
});
