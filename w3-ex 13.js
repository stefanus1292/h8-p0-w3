function targetTerdekat(arr) {
var arrX = []
var urutan = []
var oFinder = arr.indexOf('o')
for(i = 0; i<arr.length; i++){
if(arr[i] === 'x'){
arrX.push(i)
}
  }
for(var i = 0; i<arrX.length; i++){
   
var jarakTerdekat =  arrX[i] - oFinder
if (jarakTerdekat<0) jarakTerdekat *= -1;
    
urutan.push(jarakTerdekat)
  }
urutan.sort(function(value1, value2) { return value1 > value2 })
 
console.log(urutan)
 
var target = urutan[0]
if (urutan.length === 0)  {
target = 0;
}
 
// if(oFinder < 6){
  // var hasil = arrX[0] - oFinder
  // }else if (oFinder > 5){
  //   hasil = oFinder - arrX[2]
  // }
  
  // return hasil
}

 
 return target

  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2