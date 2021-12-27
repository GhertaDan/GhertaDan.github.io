var name = "Ivan";
let number = 7;
const pi = 3.14;

number = 4;

let leftBorderWidth = 200;

// number 
// string
// true/false
// null 
// undefined 
// let obj = {
//     name: 'apple',
//     color: 'green',
//     weight: 200
// }

// Symbol

// alert(1234);
// console.log(number);
// let answer = confirm("Aveti 18?");
// console.log(answer);

// let answer = prompt("Aveti 18?", "");
// console.log(answer);

// console.log(4 + 'ddd');

// let isChecked = true,
//     isClosed = false;

// console.log(isChecked && isClosed);

// console.log(isChecked || isClosed);

// if (2*6 == 8*1) {
//     console.log('Adevarat');
// } else {
//     console.log('Fals');
// }

// let answer = confirm("Aveti 18?");
// if (answer) {
//     console.log('Intrati');
// } else {
//     console.log('DUte');
// }

// const num = 50;

// if (num < 49) {
//     console.log('Incorrect');
// } else if (num > 100){
//     console.log('mult');
// } else {
//     console.log('corect');
// }

// for(let i = 1; i <= 8; i++) {
//     console.log(i);
// }

// function logging(a, b) {
//     console.log( a + b);
// }

// logging(3,5);

// logging(6,8);

$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 700,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
});