// 今日の日付を取得
const today = new Date();

// 年・月・日を取得（※月は0始まりなので +1 する）
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();

// 表示
console.log(`${year}年${month}月${day}日`);