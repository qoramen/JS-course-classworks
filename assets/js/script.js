// const arr = ['Islom', 'Murod' , 'Qodirali' , 'Olim' , 'Fayzulla']
// const newArr = []
// console.log(newArr)

// for (let i = 0 ; i < arr.length ; i++){
//     const words = arr[i];
//     if(words.length > 6){
//         newArr.push(words)
//     }
// }

let arr = ['MuroD' , 'OliM'];
let changer = [];
console.log(changer);

for (let i = 0; i < arr.length; i++) {
    let words = arr[i];
    let abc = words.length
    if (abc.length === abc.toUpperCase()) {
        changer.push(abc.toLowerCase());
    } else if (abc.length === abc.toLowerCase()) {
        changer.push(abc.toUpperCase());
    }
}