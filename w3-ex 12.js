function tentukanDeretGeometri(arr) {
var arrKosong = []
for(var i = 0; i <arr.length-1; i++){
var totalbagi = arr[i+1]/arr[i]
arrKosong.push(totalbagi)
    }
for(var j = 0; j <arrKosong.length; j++)
if(arrKosong[j] === arrKosong[j+1]){
return true
}
return false
}
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false