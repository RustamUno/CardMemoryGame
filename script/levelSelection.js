const box = document.querySelector(".box");

const area = document.createElement("div");
const menuBox = document.createElement("div");
const selectionMenu = document.createElement("div");
const text = document.createElement("h1");
const difficultySelection = document.createElement("section");
const lvlOne = document.createElement("label");
const lvlTwo = document.createElement("label");
const lvlThree = document.createElement("label");
const levelOne = document.createElement("input");
const levelTwo = document.createElement("input");
const levelThree = document.createElement("input");
const btnStart = document.createElement("button");

area.classList = "area";
menuBox.classList = "menu-box";
selectionMenu.classList = "selection-menu";
text.classList = "text";
difficultySelection.classList = "difficulty-selection";
lvlOne.classList = "one";
lvlTwo.classList = "two";
lvlThree.classList = "three";
levelOne.classList = "level";
levelTwo.classList = "level";
levelThree.classList = "level";
btnStart.classList = "btn";

text.textContent = "Выбери сложность";
lvlOne.textContent = "1";
lvlTwo.textContent = "2";
lvlThree.textContent = "3";
levelOne.type = "radio";
levelTwo.type = "radio";
levelThree.type = "radio";
levelOne.value = "1";
levelTwo.value = "2";
levelThree.value = "3";
btnStart.textContent = "Старт";

levelOne.name = "level";
levelTwo.name = "level";
levelThree.name = "level";

box.appendChild(area);
area.appendChild(menuBox);
menuBox.appendChild(selectionMenu);
selectionMenu.appendChild(text);
selectionMenu.appendChild(difficultySelection);
difficultySelection.appendChild(lvlOne);
difficultySelection.appendChild(lvlTwo);
difficultySelection.appendChild(lvlThree);
lvlOne.appendChild(levelOne);
lvlTwo.appendChild(levelTwo);
lvlThree.appendChild(levelThree);
difficultySelection.appendChild(btnStart);

const level = document.querySelectorAll('input[name="level"]');

btnStart.addEventListener("click", () => {
  for (let lev of level) {
    let levelSel = lev.value;
    if (lev.checked) {
      levelSel === "1"
        ? showTheFirstLevel()
        : levelSel === "2"
        ? showTheSecondLevel()
        : levelSel === "3"
        ? showTheThirdLevel()
        : console.log("no");
    }
  }
});

lvlOne.addEventListener("click", () => {
  lvlOne.classList.add("change");
  lvlTwo.classList.remove("change");
  lvlThree.classList.remove("change");
  lvlOne.classList.remove("darkening");
  lvlTwo.classList.add("darkening");
  lvlThree.classList.add("darkening");
});

lvlTwo.addEventListener("click", () => {
  lvlTwo.classList.add("change");
  lvlOne.classList.remove("change");
  lvlThree.classList.remove("change");
  lvlTwo.classList.remove("darkening");
  lvlOne.classList.add("darkening");
  lvlThree.classList.add("darkening");
});

lvlThree.addEventListener("click", () => {
  lvlThree.classList.add("change");
  lvlOne.classList.remove("change");
  lvlTwo.classList.remove("change");
  lvlThree.classList.remove("darkening");
  lvlOne.classList.add("darkening");
  lvlTwo.classList.add("darkening");
});
