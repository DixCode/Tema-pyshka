//customSome
const array = [1,2,3, 4, 5, 6, 7, 8, 9];
Array.prototype.customSome = function(callback) {
  if (this.length === 0) return false;
 let result=false
  for (let i = 0; i < this.length; i++) {
   if(callback(this[i],i,this)){
     result=true
     break
   }
  }
 return result;
};

console.log(array.customSome(item => item === 2));

//customEvery

const array1=[2,2,2,2,2]
Array.prototype.customEvery = function(callback) {
  if (this.length === 0) return true;
  let result = true;
  for (let i = 0; i < this.length; i++) {
    if (!callback(this[i],i,this)) {
      result = false;
      break
    }
  }
  return result;
};

console.log(array1.customEvery(item => item === 2));