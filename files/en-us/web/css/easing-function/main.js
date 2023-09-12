// .querySelector(CSS Selectors)
const selectElem = document.querySelector("select");
const startBtn = document.querySelector("button");
// div > div          combinators, direct descendants
const divElem = document.querySelector("div > div");

// Event listener during capturing event phase (top -> element)

function handleEventForStartButton() {
  if (startBtn.textContent === "Start animation") {
    divElem.style.animationName = "move-right";
    startBtn.textContent = "Stop animation";
    //Next sentence make all the magic to switch to another easing-function
    divElem.style.animationTimingFunction = selectElem.value;
  } else {
    divElem.style.animationName = "unset";
    startBtn.textContent = "Start animation";
  }
}

startBtn.addEventListener(
  "click",
  handleEventForStartButton
);

function handleEventForSelectElement() {
  divElem.style.animationTimingFunction = selectElem.value;
}
selectElem.addEventListener(
  "change",
  handleEventForSelectElement
);
