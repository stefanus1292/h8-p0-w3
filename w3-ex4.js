function dataHandling2(input) {
    input.splice(1,1, "Roman Alamsyah");
    input.splice(4,1, "Pria", "SMA Internasional Metro");
    console.log(input);
    
    var date = input[3].split("/");
    var month = parseInt(date[1]);
    switch(month) {
      case 1: console.log('Januari'); break;
      case 2: console.log('Februari'); break;
      case 3: console.log('Maret'); break;
      case 4: console.log('April'); break;
      case 5: console.log('Mei'); break;
      case 6: console.log('Juni'); break;
      case 7: console.log('Juli'); break;
      case 8: console.log('Agustus'); break;
      case 9: console.log('September'); break;
      case 10: console.log('Oktober'); break;
      case 11: console.log('November'); break;
      case 12: console.log('Desember'); break;
      default: console.log('Month Not Available');
    }
    console.log(date);
    var descendingDate = date.sort(function(value1, value2){ return value2 - value1 });
    console.log(descendingDate);
    
var revertDate = input[3].split("/");
var joinDate = revertDate.join("-");
console.log(joinDate);
    
var sliceName = input[1].slice(0,15);
console.log(sliceName);
  }


var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */