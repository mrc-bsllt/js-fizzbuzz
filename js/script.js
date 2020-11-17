var generatorButton = document.getElementById("generator_button");
var annulerButton = document.getElementById("annuler_button");
var numbersList = document.getElementById("numbers_list");
var j;

generatorButton.addEventListener("click",
  function () {
    for (var i = 1; i < 101; i++) {

      if((i % 3 == 0) && (i % 5 == 0)) {
        j = "<li class='green'>" + "FizzBuzz" + "</li>";
      } else if (i % 3 == 0) {
        j = "<li class='red'>" + "Fizz" + "</li>";
      } else if (i % 5 == 0) {
        j = "<li class='blue'>" + "Buzz" + "</li>";
      } else {
        j = "<li>" + i + "</li>";
      }

      numbersList.innerHTML +=  j;
    }
  }
);

annulerButton.addEventListener("click",
  function() {
    numbersList.innerHTML = "";
  }
);
