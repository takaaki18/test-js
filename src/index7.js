/**
 * mapやfilterを使った配列の処理
 */

const nameArr = ["田中", "山田", "佐藤"];

// for (let index = 0; index < nameArr.length; index++) {
//     console.log(`${index + 1}番目は${nameArr[index]}です。`);
// }

// const nameArr2 = nameArr.map((name) => {
//     return name + "さん";
// });

// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => num % 2 === 0);
// console.log(newNumArr);

const newNameArr = nameArr.map((name) => {
    if (name === "佐藤") {
        return name;
    } else {
        return `${name}さん`;
    }
});

console.log(newNameArr);