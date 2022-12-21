const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];
const arr = [1, 2, 3, 4, 5];


const getAverageValue = (arr) => {
  let sum=0; 

  for (let elem of arr) {
    sum  += elem;
  }
  return Math.ceil(sum/arr.length);
};

console.log(getAverageValue(allСashbox));
console.log(getAverageValue(arr));


