//  1 - MASALA
// let yosh = 46;

// if (yosh < 18 ) {
//     console.log('-18')
// } else if (yosh >= 18 && yosh <= 25) {
//     console.log('18+')
// } else if (yosh > 25 && yosh <= 45) {
//     console.log('25+')
// } else if (yosh > 45 && yosh <= 90){
//     console.log('45+')
// } else if (yosh > 90) {
//     console.log('90+')
// } else {
//     console.log('error')
// }

// if (yosh < 18 ) {
//     console.log('-18')
// } else if (yosh <= 25) {
//     console.log('18+')
// } else if (yosh <= 45) {
//     console.log('25+')
// } else if (yosh <= 90){
//     console.log('45+')
// } else if (yosh > 90) {
//     console.log('90+')
// } else {
//     console.log('error')
// }

// 2 - MASALA

// let x = 3;

// if (x % 3 === 0 && x % 5 === 0) {
//     console.log("fizzbazz");
// } else if (x % 3 === 0) {
//     console.log("fizz");
// } else if (x % 5 === 0) {
//     console.log("bazz");
// }

// 3 - MASALA

// if (isNaN(num)) {
//     console.log("Invalid input. Please enter a valid number.");
//     return;
// }

// function myFunction(yosh) {
//     if (yosh < 18) {
//         console.log('-18')
//     } else if (yosh <= 25) {
//         console.log('18+')
//     } else if (yosh <= 45) {
//         console.log('25+')
//     } else if (yosh <= 90) {
//         console.log('45+')
//     } else if (yosh > 90) {
//         console.log('90+')
//     }
// }

// myFunction(91)

// 4 - MASALA

// function myFunction (num1, num2, belgi) {

//     if (belgi === '+') {
//         javob = num1 + num2;
//     } else if (belgi === '-') {
//         javob = num1 - num2;
//     } else if (belgi === '*') {
//         javob = num1 * num2;
//     } else if (belgi === '/') {
//         if (num2 == 0) {
//             javob = 'xato';
//         } else {
//             javob = num1 / num2;
//         }
//     }

//     console.log(`${num1} ${belgi} ${num2} = ${javob}`);
// }

// myFunction( 10 , 2 , '+')

// function finder(number){
//     if (number % 2 == 0){
//         console.log('even');
//     } else {
//         console.log('odd');
//     }
// }

// finder(2);

// function checkOddOrEven() {

//     const num = prompt('Son kiriting:');

//     const number = Number(num);

//     if (number % 2 === 0) {
//         console.log(number + ' - bu son juft.');
//     } else {
//         console.log(number + ' - bu son toq.');
//     }
// }

// checkOddOrEven();

// 3 - MASALA

// const calculate = [12, 2, '/']

// if (calculate[2] === '+') {
//     javob = calculate[0] + calculate[1];
// } else if (calculate[2] === '-') {
//     javob = calculate[0] - calculate[1];
// } else if (calculate[2] === '*') {
//     javob = calculate[0] * calculate[1];
// } else if (calculate[2] === '/') {
//     if (calculate[1] == 0) {
//         javob = 'xato';
//     } else {
//         javob = calculate[0] / calculate[1];
//     }
// }

// console.log(`${calculate[0]} ${calculate[2]} ${calculate[1]} = ${javob} `)

// 4 - MASALA

// let num1 = prompt("Birinchi sonni kiriting:");
// let operator = prompt("Operator kiriting (+, -, *, /):");
// let num2 = prompt("Ikkinchi sonni kiriting:");

// let data = [num1, operator, num2];

// let result;
// if (data[1] === '+') {
//     result = data[0] + data[2];
// } else if (data[1] === '-') {
//     result = data[0] - data[2];
// } else if (data[1] === '*') {
//     result = data[0] * data[2];
// } else if (data[1] === '/') {
//     if (data[2] == 0) {
//         result = "Uka yoldan adashding"; 
//     } else {
//         result = data[0] / data[2];
//     }
// } else {
//     result = "Uka yoldan adashding";
// }

// console.log(`${num1} ${operator} ${num2} = ${result}`);

// 5 -MASALA

// for (let i = 10 ; i >= 0 ; i--){
//     console.log(i);
// }

//  6 - MASALA

// let arr = [1, 64, 75, 4, 54, 88];

// for (i = 0; i <= arr.length; i++) {
//     console.log(arr[i]);
//     console.log();
// }

//  6 - MASALA

// let arr = [1, 64, 75, 4, 54, 88];

// for (i = arr.length-1; i >= 0; i--) {
//     console.log(arr[i]);
//     console.log()
// }

// 7 - MASALA

// for ( let i = 0 ; i <= 100 ; i++){
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("fizzbazz");
//     } else if (i % 3 === 0) {
//         console.log("fizz");
//     } else if (i % 5 === 0) {
//         console.log("bazz");
//     } else {
//         console.log(i);
//     }
// }

// 8 - MASALA

// let a = 'Suv';
// let b = '';
// let c = 'Choy';

// b = c;
// c = a;
// a = b;


// console.log(a);
// console.log(c);

// 9 - MASALA

// let yigindi = 0;

// for (let i = 1; i <= 100; i++){
//     yigindi += i;
// }

// console.log(`100 gacha sonlar yig'indisi: ${yigindi}`);

// 10 - MASALA

// let yigindi = 0
// let arr = [];

// for (let i = 1; i <= 100; i++){
//     yigindi += i;
//     console.log(arr.push(i))
// }

// console.log(arr)

// console.log(`100 gacha sonlar yig'indisi: ${yigindi}`);

// 11 - MASALA

// let arr = [1, 45, 98, 75, 8];
// let max = arr[0];

// for (let i = 0; i < arr.length-1; i++){
//     if (max < arr[i]){
//         max = arr[i];
//     }

// }

// console.log(max);

// 12 - MASALA

// let arr = [1, 45, 98, 75, 8];
// let max = arr[0];

// for (let i = 0; i < arr.length-1; i++){
//     if (max > arr[i]){
//         max = arr[i];
//     }

// }

// console.log(max); 

// 13 - MASALA

// const data1 = prompt('Enter your name');
// const data2 = prompt('Enter your age');
// const data3 = prompt('Enter your gender (male/female)');

// let datas = {
//     name: '',
//     age: '',
//     gender: ''
// }

// datas.name = data1;
// datas.age = data2;
// datas.gender = data3;

// console.log(datas)

// 14 - MASALA

// function security (username1, password1) {
//     let userinfo = {
//         username2: 'qoramen',
//         password2: 12345678
//     }
//     if (userinfo.username2 != username1 && userinfo.password2 != password1){
//         console.log('invalid username and password')
//     } else if (userinfo.username2 != username1){
//         console.log('invalid username')
//     } else if (userinfo.password2 != password1){
//         console.log('invalidpassword')
//     } else {
//         console.log('You may go');
//     }
// }

// security('qormen', 12345678)

// 15 - MASALA

// function security(boolen, username1, password1) {
//     let userinfo = {
//         username2: 'qoramen',
//         password2: 12345678
//     }

//     if (boolen == true) {
//         userinfo.username2 = username1;
//         userinfo.password2 = password1;
//         console.log(userinfo);
//     } else {
//         if (userinfo.username2 != username1 && userinfo.password2 != password1){
//             console.log('invalid username and password')
//         } else if (userinfo.username2 != username1){
//             console.log('invalid username')
//         } else if (userinfo.password2 != password1){
//             console.log('invalidpassword')
//         } else {
//             console.log('You may go');
//         }
//     }
// }

// security(false, 'ngaman', 20010911) 

// 16 - MASALA

// function security(boolen, username1, password1) {

//     const checker = prompt('Have you forgeten your password and username (true/false)');
//     const checkerusername = prompt('Enter your username');
//     const checkerpassword = prompt('Enter your password');

//     boolen = checker;
//     username1 = checkerusername;
//     password1 = checkerpassword

//     let userinfo = {
//         username2: 'qoramen',
//         password2: 12345678
//     }

//     if (boolen === 'true') {
//         userinfo.username2 = username1;  
//         userinfo.password2 = password1;
//         console.log(userinfo)
//     } else {
//         if (userinfo.username2 != username1 && userinfo.password2 != password1){
//             alert('invalid username and password')
//         } else if (userinfo.username2 != username1){
//             alert('invalid username')
//         } else if (userinfo.password2 != password1){
//             alert('invalidpassword')
//         } else {
//             alert('You may go');
//         }
//     }
// }

// security()

// DOM 'get' exemples

// const heading1 = document.getElementById('title');
// heading1.remove();

// const user = document.getElementsByName('user');
// heading1.remove();

// const headings = document.getElementsByClassName('heading');
// headings[1].remove();

// const headings = document.getElementsByTagName('h3');
// console.log(headings);

// const heading = document.querySelector('#title');
// console.log(heading)

// const arr = ['Islom', 'Murod' , 'Qodirali' , 'Olim' , 'Fayzulla']
// const newArr = []
// console.log(newArr)

// for (let i = 0 ; i < arr.length ; i++){
//     const words = arr[i];
//     if(words.length > 6){
//         newArr.push(words)
//     }
// }

// let arr = ['MuroD' , 'OliM'];
// let changer = [];
// console.log(changer);

// for (let i = 0; i < arr.length; i++) {
//     let words = arr[i];
//     let abc = words.length
//     if (abc.length === abc.toUpperCase()) {
//         changer.push(abc.toLowerCase());
//     } else if (abc.length === abc.toLowerCase()) {
//         changer.push(abc.toUpperCase());
//     }
// }

// const toggleBtn = document.getElementById('toggleBtn');
// const container = document.getElementById('container');
// const para = document.getElementById('par')


// toggleBtn.onclick = function () {
//     if (container.classList = 'red') {
//         container.classList.toggle('blue')
//     }
//     toggleBtn.onclick = function (){
//         if(para.classList = 'white') {
//             para.classList.toggle('black') 
//         }
//     }
// }

// toggleBtn.addEventListener('mouseover', () => {
//     container.innerHTML = 'Hello Guys!'
// })

// container.classList.toggle('blue')
// toggleBtn.onclick = function () {
//     para.classList.toggle('black')
// }

// let i = 11

// do {
//     i++
//     console.log(i);
// } while (i < 10);

// for (let i = 0; i < 10; i++){
//     console.log(i);
// }

// calc(10, 3, '+');
// function calc(num1, num2, belgi) {
//     if (belgi === '+') {
//         javob = num1 + num2;
//     } else if (belgi === '-') {
//         javob = num1 - num2;
//     } else if (belgi === '*') {
//         javob = num1 * num2;
//     } else if (belgi === '/') {
//         if (num2 == 0) {
//             javob = 'xato';
//         } else {
//             javob = num1 / num2;
//         }
//     }

//     console.log(`${num1} ${belgi} ${num2} = ${javob}`);
// }

// const calc2 = function () {
//     for (let i = 0; i <= 15; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("fizzbazz");
//         } else if (i % 3 === 0) {
//             console.log("fizz");
//         } else if (i % 5 === 0) {
//             console.log("bazz");
//         } else {
//             console.log(i);
//         }
//     }
// }

// calc2();

// const calc3 = (username1, password1) => {
//     let userinfo = {
//         username2: 'qoramen',
//         password2: 123
//     }
//     if (userinfo.username2 != username1 && userinfo.password2 != password1) {
//         console.log('invalid username and password')
//     } else if (userinfo.username2 != username1) {
//         console.log('invalid username')
//     } else if (userinfo.password2 != password1) {
//         console.log('invalidpassword')
//     } else {
//         console.log('You may go');
//     }
// }

// console.log(calc3('qoramen', 123));

// function first(par1, cb) {
//     setTimeout(() => {
//         console.log(par1);
//         cb()
//     }, 1000);
// }

// function second(par2) {
//     console.log(par2);
// }

// function third(par3) {
//     console.log(par3);
// }

// function fourth(par4) {
//     console.log(par4);
// }

// first(1, function () {
//     second(2);
//     third(3);
//     fourth(4)
// })