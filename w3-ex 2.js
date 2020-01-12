function balikkata(kata){
var temp = ''
for (var i = 0; i <kata.length; i++){
temp=kata[i]+temp
}
return temp
}

console.log(balikKata('Halo apa kabar')); // rabak apa olah
console.log(balikKata('Arsenal')); // lanesrA