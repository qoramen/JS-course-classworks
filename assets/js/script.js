const userInfos = new Map();

const defUserInfos = {
    defFirstname: 'Murodbek',
    defLastname: 'Tojiboyev',
    defPassword: 1234
}

const data = prompt('Enter your firstname, lastname, password (only 3 data) with commo( , )', '');

const dataArr = data.split(',');

const takeFirstname = dataArr[0].trim();
const takeLastname = dataArr[1].trim();
const takePassword = dataArr[2].trim();

userInfos.set('firstname', takeFirstname || defUserInfos.defFirstname );
userInfos.set('lastname', takeLastname || defUserInfos.defLastname);
userInfos.set('age', takePassword || defUserInfos.defPassword);
console.log(userInfos);