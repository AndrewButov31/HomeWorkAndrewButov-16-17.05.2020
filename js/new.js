"use strict";
import{start, end, myarray} from './index.js';
console.group('Задание 2');
console.log("2.Реализация задания 1 в модуле, используя директивы export и import");
console.log(`  Начало массива = ${start}`);
console.log(`  Конец конец = ${end}`);
console.log(`  Сгенерированый массив ${myarray}`);
console.groupEnd ('Задание 2');

console.group('Задание 3');
console.log("3. Создайте форму с элементами пользовательского ввода. Подсвечиваете границу элемента голубым при наведении курсора\n" +
    "  мыши и установите фон (например тот же синий) при нажатии на элемент.");
let myForm = document.forms.myForm;
let enteredText = myForm.elements.enteredText;
enteredText.addEventListener('mouseover', mouseOverInput)
enteredText.addEventListener('mouseout', mouseOutInput);
enteredText.addEventListener('click', pressingInput);
function pressingInput() {
    enteredText.style.background  = 'lightblue';
}
function mouseOverInput() {
    enteredText.style.borderColor = 'blue';
}
function mouseOutInput() {
    enteredText.style.borderColor = 'red'
    enteredText.style.background  = 'white';
}
console.groupEnd ('Задание 3')