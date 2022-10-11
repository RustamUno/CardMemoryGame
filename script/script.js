const gameContent = document.querySelector(".game-content");

const boxInside = document.createElement("div");
const boxText = document.createElement("div");
const title = document.createElement("h1");
const difficultyGame = document.createElement("div");
const levelOne = document.createElement("label");
const levelTwo = document.createElement("label");
const levelThree = document.createElement("label");
const inputOne = document.createElement("input");
const inputTwo = document.createElement("input");
const inputThree = document.createElement("input");
const btn = document.createElement("button");

boxInside.classList = "box-inside";
boxText.classList = "box-text";
title.classList = "text";
difficultyGame.classList = "difficulty-game";
levelOne.classList = "one";
levelTwo.classList = "two";
levelThree.classList = "three";
inputOne.classList = "level";
inputTwo.classList = "level";
inputThree.classList = "level";
btn.classList = "btn";

inputOne.type = "radio";
inputTwo.type = "radio";
inputThree.type = "radio";
inputOne.value = "1";
inputTwo.value = "2";
inputThree.value = "3";
inputOne.name = "level";
inputTwo.name = "level";
inputThree.name = "level";

title.textContent = "Выбери сложность";
levelOne.textContent = "1";
levelTwo.textContent = "2";
levelThree.textContent = "3";
btn.textContent = "Старт";

gameContent.appendChild(boxInside);
boxInside.appendChild(boxText);
boxText.appendChild(title);
boxInside.appendChild(difficultyGame);
difficultyGame.appendChild(levelOne);
difficultyGame.appendChild(levelTwo);
difficultyGame.appendChild(levelThree);

levelOne.appendChild(inputOne);
levelTwo.appendChild(inputTwo);
levelThree.appendChild(inputThree);
difficultyGame.appendChild(btn);

const level = document.querySelectorAll('input[name="level"]');

btn.addEventListener("click", (event) => {
  for (let lev of level) {
    let levelSel = lev.value;
    if (lev.checked) {
      levelSel === "1"
        ? (location.href = "./levelOne.html")
        : levelSel === "2"
        ? (location.href = "./levelTwo.html")
        : levelSel === "3"
        ? (location.href = "./levelThree.html")
        : console.log("no");
    }
  }
});

levelOne.addEventListener("click", (event) => {
  levelOne.classList.add("change");
  levelTwo.classList.remove("change");
  levelThree.classList.remove("change");
  levelOne.classList.remove("darkening");
  levelTwo.classList.add("darkening");
  levelThree.classList.add("darkening");
});

levelTwo.addEventListener("click", (event) => {
  levelTwo.classList.add("change");
  levelOne.classList.remove("change");
  levelThree.classList.remove("change");
  levelTwo.classList.remove("darkening");
  levelOne.classList.add("darkening");
  levelThree.classList.add("darkening");
});

levelThree.addEventListener("click", (event) => {
  levelThree.classList.add("change");
  levelOne.classList.remove("change");
  levelTwo.classList.remove("change");
  levelThree.classList.remove("darkening");
  levelOne.classList.add("darkening");
  levelTwo.classList.add("darkening");
});
