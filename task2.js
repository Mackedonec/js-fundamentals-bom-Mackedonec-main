// Задано сторінку з 3 кнопками . Напишіть Javascript код і реалізуйте HTML-сторінку з відповідними подіями на кожному елементові:
//         1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
//         2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
//         3) 3-я кнопка – при наведенні колір фону міняється на коричневий
//
// Запустіть виконане завдання за допомогою Live Server
// Перевірте виконання за допомогою команди node tests/task2.test.js

const buttonOne = document.querySelector("#button1");
const buttonTwo = document.querySelector("#button2");
const buttonThree = document.querySelector("#button3");
const body = document.querySelector("body");

// test

// buttonOne.addEventListener("click", function () {
//   const newWindow = window.open(
//     "",
//     "",
//     "width=400,height=400,left=100,top=100"
//   );
//   newWindow.document.write(
//     '<body style="background-color: blue;"><h1 style="text-align: center;">Вікно1</h1></body>'
//   );
// });

// buttonTwo.addEventListener("click", function () {
//   const newWindow = window.open(
//     "",
//     "",
//     "width=400,height=400,left=100,top=100"
//   );
//   newWindow.document.write(
//     '<body style="background-color: pink;"><h1 style="text-align: center;">Вікно2</h1></body>'
//   );
// });

// buttonThree.addEventListener("mouseover", function () {
//   const newWindow = window.open(
//     "",
//     "",
//     "width=400,height=400,left=100,top=100"
//   );
//   newWindow.document.write(
//     '<body style="background-color: brown;"><h1 style="text-align: center;">Вікно3</h1></body>'
//   );
// });

// solution №1

buttonOne.addEventListener("click", function () {
  if (body.style.backgroundColor === "blue") {
    body.removeAttribute("style");
  } else {
    body.style.backgroundColor = "blue";
  }
});

buttonTwo.addEventListener("click", function () {
  if (body.style.backgroundColor === "orange") {
    body.removeAttribute("style");
  } else {
    body.style.backgroundColor = "orange";
  }
});

buttonThree.addEventListener("mouseover", function () {
  if (body.style.backgroundColor === "brown") {
    body.removeAttribute("style");
  } else {
    body.style.backgroundColor = "brown";
  }
});
