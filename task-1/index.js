const array = [1, 2, 3, 4, 5];
Array.prototype.customReduce = function(callback, initialValue) {
  let value = initialValue;
  for (let i = 0; i < this.length; i++) {
    value = callback(value, this[i], i, this);
  }
  return value;
};

console.log(array.customReduce((acc, num) => acc + num, 0));
