// stampo i numeri da 1 a 100
var numbersList = document.getElementById("numbers_list");
var j;
for (var i = 1; i < 101; i++) {

  if((i % 3 == 0) && (i % 5 == 0)) {
    j = "<li class='green'>" + "FizzBuzz" + "</li>";
  } else if (i % 3 == 0) {
    j = "<li class='red'>" + "Fizz" + "</li>";
  } else if (i % 5 == 0) {
    j = "<li class='blue'>" + "Buzz" + "</li>";
  } else {
    j = i;
  }


  numbersList.innerHTML += "<li>" + j + "</li>";
}
