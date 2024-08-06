// Реалізуйте програму, яка відслідковуватиме зміну розміру (ширини і висоти) вікна браузера
//  і виводитиме на поточну сторінку при її розтязі/стисканні відповідні значення.
// Для запуску використовувати Live Server
// Для перевірки node tests/task4.test.js

const widthValue = document.querySelector("#widthValue");
const heightValue = document.querySelector("#heightValue");

function size() {
  widthValue.innerText = window.innerWidth;
  heightValue.innerText = window.innerHeight;
}
size();

window.addEventListener("resize", size);
