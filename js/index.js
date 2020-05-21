"use strict";
console.group('Задание 1');
console.log("1.Создать класс. С помощью глобально доступной константы Symbol.iterator реализуйте вывод массива\n" +
    "при использовании Symbol.iterator. Необходимо сгенерировать массив и вывести его. Генерировать используя счетчик с\n" +
    "началом и концом отчета или назначать рандомные значения.");
//let start = 1, end = 6;
let start = Math.floor(Math.random(1)*10), end = Math.floor(Math.random(2)*100);
class newClass{
    constructor(start, end){
        this.start = start;
        this.end = end;
    }
}
let myclass = new newClass(start, end);
myclass[Symbol.iterator] = function () {
    let start = this.start;
    let finish = this.end;
    return{
        next(){
            if(start <= finish){
                return{
                    done: false,
                    value: start++
                };
            }else{
                return {
                    done: true
                };
            }
        }
    }
};
let myarray = [];
for(let number of myclass){
    myarray.push(number);
}
console.log("  Созданый класс",myclass);
export {start, end, myarray};
console.groupEnd ('Задание 1');



