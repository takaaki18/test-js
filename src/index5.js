/**
 * デフォルト値、引数
 */

const sayHello = (name = "ゲスト") => {
  console.log(`こんにちは${name}さん!`);
};

sayHello("太郎");