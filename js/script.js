var button = document.getElementById("button");
var numbersList = document.getElementById("numbers_list");
var j;


button.addEventListener("click",
  function () {
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
  }
);
