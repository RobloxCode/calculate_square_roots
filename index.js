function calculateSquareRoot() {
  let num = document.querySelector(".input-operation").value;
  let result;

  //the number is positive
  if(num >= 0) {
    result = Math.sqrt(num);
    document.querySelector(".js-answer-text").innerHTML = `Answer: 	&#177; ${result}`;
    console.log(typeof num);
  }
  //the number is negative
  else {
    let positiveNum = num * (-1);
    result = Math.sqrt(positiveNum);
    document.querySelector(".js-answer-text").innerHTML = `Answer: 	&#177; ${result}i`;
  }

  //change the text of the button back to normal
  document.querySelector(".js-calculate-button").innerHTML = "Calculate";

}

//document.querySelector(".js-calculate-button").addEventListener("click", () => {
//  calculateSquareRoot();
//});

function clearButton() {
  document.querySelector(".input-operation").value = "";
  document.querySelector(".js-answer-text").innerHTML = "Answer:";
}

document.querySelector(".js-clear-button").addEventListener("click", () => {
  clearButton();
});

//when the user presses the calculate button, change it to say calculating...
function makeTheButtonLoad() {
  setTimeout(() => {
    document.querySelector(".js-calculate-button").innerHTML = "calulating...";
  }, 0);

  //after one second show the result
  setTimeout(() => {
    calculateSquareRoot();
  }, 1000);
}

document.querySelector(".js-calculate-button").addEventListener("click", () => {
  makeTheButtonLoad();
});

document.body.addEventListener("keydown", (event) => {
  if(event.key === "Enter") {
    makeTheButtonLoad();
  }
});
  
