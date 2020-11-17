// stampo i numeri da 1 a 100
var numbersList = document.getElementById("numbers_list");
var j;
for (var i = 1; i < 101; i++) {

  if((i % 3 == 0) && (i % 5 == 0)) {
    j = "FizzBuzz";
  } else if (i % 3 == 0) {
    j = "Fizz";
  } else if (i % 5 == 0) {
    j = "Buzz";
  } else {
    j = i;
  }


  numbersList.innerHTML += "<li>" + j + "</li>";
}
