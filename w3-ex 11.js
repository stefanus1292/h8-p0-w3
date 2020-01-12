function tentukanDeretAritmatika(arr) {
var array = []
 
for(var i = 0; i <arr.length-1; i++){
var selisih = arr[i + 1] - arr[i];
array.push(selisih)
}
console.log(array)
for (var j = 0; j < array.length-1; j++){
console.log(array[j])
if (array[j] !== array[j+1]) return false;
}
return true
  }
  
  // TEST CASES
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false