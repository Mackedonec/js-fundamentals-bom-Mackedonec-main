// Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку.
// Можуть видалятися всі елементи в будь-якому порядку.
// Список з елементами знаходиться у файлі index.html
// Для запуску використовувати Live Server
// Для перевірки виконання виконати команду node tests/task3.test.js

const dropdown = document.querySelector("#dropdown");
const deleteButton = document.querySelector("#deleteButton");

// solution №1

// deleteButton.addEventListener("click", function () {
//   const selectedValue = dropdown.value;
//   const options = dropdown.options;
//   for (let i = 0; i < options.length; i++) {
//     if (options[i].value === selectedValue) {
//       options[i].remove();
//       break;
//     }
//   }
// });

// solution №2

// deleteButton.addEventListener("click", function () {
//   dropdown.options[dropdown.selectedIndex].remove();
// });

// solution №3

// deleteButton.addEventListener("click", function () {
//   const selectedOption = dropdown.options[dropdown.selectedIndex];
//   if (selectedOption) {
//     selectedOption.remove();
//   }
// });

// solution №4

const originalOptions = Array.from(dropdown.options).map((option) => {
  return { value: option.value, text: option.text };
});

deleteButton.addEventListener("click", function () {
  const selectedOption = dropdown.options[dropdown.selectedIndex];
  if (selectedOption) {
    selectedOption.remove();
  }

  if (dropdown.options.length === 0) {
    originalOptions.forEach((option) => {
      const newOption = document.createElement("option");
      newOption.value = option.value;
      newOption.text = option.text;
      dropdown.appendChild(newOption);
    });
  }
});
