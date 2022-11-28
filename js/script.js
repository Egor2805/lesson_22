"use strict";
let learnJs = 'Я учу JS';
console.log(learnJs);

let user;
let userName = "Вася";
user = userName;
console.log(user);

if (true) {
	var size = 15;
}
console.log(size);

let userNames;
console.log(typeof userName);
userNames = 'Egor';
console.log(userNames);

let userYears = 33;
console.log(typeof userYears);
userYears = 33;
console.log(userYears);

console.log(userNames + userYears);

let willYouMerryMe = false;
if (willYouMerryMe) {
	console.log(':)');
} else {
	console.log(':(')
}
let trueOrFalse = 44 < 33;
console.log(trueOrFalse);


let getInfinity = 55 / 0;
console.log(getInfinity);
console.log(typeof getInfinity);

let userAge = 33;
let userNik = 'Odessastoner';
let userHobby = 'Баскетбол'
let userAgeInfo = 
`Возвраст: ${userAge}
Никнейм: ${userNik}
Хобби: ${userHobby}`;
console.log(userAgeInfo);