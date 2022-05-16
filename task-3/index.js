const array1 = [2, 7, 8, 9, 6, 10, 1];
const array2 = [1, 2, 3, 4, 5, 6];


function customDifference(array1, array2) {
  let newArray = Array.isArray(array2) ? array2 : [...array2];
  const result = [];
  for (let i = 0; i < array1.length; i++) {
    if (!newArray.some(item => item === array1[i]))  result.push(array1[i])
  }
  return result;
}

console.log(customDifference(array1, array2));