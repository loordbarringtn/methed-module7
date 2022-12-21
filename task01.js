const firstArray = [1,2,3,4,5,6,7,8,9,10];
const secondArray = [5,6,7,8,9,10,11,12,13,14,15,16];

const filter = (firstArray, secondArray) => {
  const newArray = [];
  for (let i in firstArray) {
    for (let j in secondArray) {
      if (firstArray[i] === secondArray[j]) {
        newArray.push(firstArray[i]);
      }
    }
  }
  return newArray;
}

console.log(filter(firstArray, secondArray));































