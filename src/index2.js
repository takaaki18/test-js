/**
 * テンプレート文字列
 */

const name = "太郎";
const age = 11;

// 「私の名前は太郎です。年齢は11歳です。」

// 従来の方法
const message1 = "私の名前は" + name +"です。年齢は" + age + "歳です。";
console.log(message1);

// テンプレート文字列を用いた方法
const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
console.log(message2);