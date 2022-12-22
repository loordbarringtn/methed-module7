const allCashbox = [
  [12, 4500],
  [7, 3210],
  [4, 650],
  [3, 1250],
  [9, 7830],
  [1, 990],
  [6, 13900],
  [1, 370],
];

const getAveragePriceGoods = (arrayName) => {
  let sum = 0;
  for (let i = 0; i < arrayName.length; i++) {
    sum += arrayName[i][1] / arrayName[i][0];
  }
  return Math.ceil(sum / arrayName.length);
};

console.log(getAveragePriceGoods(allCashbox));
