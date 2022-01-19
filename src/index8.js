/**
 * 三項演算子
 */

// ある条件 ? 条件がtrue : 条件がfalse
// const val1 = 1 < 0 ? 'trueです。' : 'falseです。';
// console.log(val1);

// const num = 1300;
// // console.log(num.toLocaleString());
//
// const formatteredNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formatteredNum);

const checkSum = (num1, num2) => {
    return num1 + num2 > 100 ? '100をこえています' : '許容範囲です';
};

console.log(checkSum(50, 10));