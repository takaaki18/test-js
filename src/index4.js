/**
 * 分割代入
 */

// const myProfile = {
//   name: "太郎",
//   age: 28,
// };
//
// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`
// console.log(message1);
//
// const { name, age } = myProfile;
//
// const message2 = `名前は${name}です。年齢は${age}歳です。`
// console.log(message2);

const myProfile2 = ['太郎', 28];

// const message3 = `名前は${myProfile2[0]}です。年齢は${myProfile2[1]}です。`;
// console.log(message3);

const [ name, age ] = myProfile2;

const message4 = `名前は${name}です。年齢は${age}です。`;
console.log(message4);