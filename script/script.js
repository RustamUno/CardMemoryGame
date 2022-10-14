const box = document.querySelector(".box");

const cardList = () => [
  {
    name: "6 бубны",
    image: "./img/6 бубны.svg",
  },
  {
    name: "6 крести",
    image: "./img/6 крести.svg",
  },
  {
    name: "6 пики",
    image: "./img/6 пики.svg",
  },
  {
    name: "6 черви",
    image: "./img/6 черви.svg",
  },
  {
    name: "7 бубны",
    image: "./img/7 бубны.svg",
  },
  {
    name: "7 крести",
    image: "./img/7 крести.svg",
  },
  {
    name: "7 пики",
    image: "./img/7 пики.svg",
  },
  {
    name: "7 черви",
    image: "./img/7 черви.svg",
  },
  {
    name: "8 бубны",
    image: "./img/8 бубны.svg",
  },
  {
    name: "8 крести",
    image: "./img/8 крести.svg",
  },
  {
    name: "8 пики",
    image: "./img/8 пики.svg",
  },
  {
    name: "8 черви",
    image: "./img/8 черви.svg",
  },
  {
    name: "9 бубны",
    image: "./img/9 бубны.svg",
  },
  {
    name: "9 крести",
    image: "./img/9 крести.svg",
  },
  {
    name: "9 пики",
    image: "./img/9 пики.svg",
  },
  {
    name: "9 черви",
    image: "./img/9 черви.svg",
  },
  {
    name: "10 бубны",
    image: "./img/10 бубны.svg",
  },
  {
    name: "10 крести",
    image: "./img/10 крести.svg",
  },
  {
    name: "10 пики",
    image: "./img/10 пики.svg",
  },
  {
    name: "10 черви",
    image: "./img/10 черви.svg",
  },
  {
    name: "валет бубны",
    image: "./img/валет бубны.svg",
  },
  {
    name: "валет крести",
    image: "./img/валет крести.svg",
  },
  {
    name: "валет пики",
    image: "./img/валет пики.svg",
  },
  {
    name: "валет черви",
    image: "./img/валет черви.svg",
  },
  {
    name: "дама бубны",
    image: "./img/дама бубны.svg",
  },
  {
    name: "дама крести",
    image: "./img/дама крести.svg",
  },
  {
    name: "дама пики",
    image: "./img/дама пики.svg",
  },
  {
    name: "дама черви",
    image: "./img/дама черви.svg",
  },
  {
    name: "король бубны",
    image: "./img/король бубны.svg",
  },
  {
    name: "король крести",
    image: "./img/король крести.svg",
  },
  {
    name: "король пики",
    image: "./img/король пики.svg",
  },
  {
    name: "король черви",
    image: "./img/король черви.svg",
  },
  {
    name: "туз бубны",
    image: "./img/туз бубны.svg",
  },
  {
    name: "туз крести",
    image: "./img/туз крести.svg",
  },
  {
    name: "туз пики",
    image: "./img/туз пики.svg",
  },
  {
    name: "туз черви",
    image: "./img/туз черви.svg",
  },
];

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

//Первое игровое поле

function showTheFirstLevel() {
  difficultySelection.parentNode.remove();

  const allBox = document.createElement("div");
  const upBox = document.createElement("div");
  const timer = document.createElement("div");
  const text = document.createElement("div");
  const min = document.createElement("p");
  const sek = document.createElement("p");
  const time = document.createElement("p");
  const startOver = document.createElement("button");
  const boxCard = document.createElement("div");
  const game = document.createElement("section");

  upBox.classList = "up-box";
  timer.classList = "timer";
  text.classList = "text-box";
  min.classList = "time-text";
  sek.classList = "time-text";
  time.classList = "time";
  startOver.classList = "restart";
  boxCard.classList = "box-card";
  game.classList = "game";

  area.appendChild(allBox);
  allBox.appendChild(upBox);
  upBox.appendChild(timer);
  timer.appendChild(text);
  text.appendChild(min);
  text.appendChild(sek);
  timer.appendChild(time);
  upBox.appendChild(startOver);
  allBox.appendChild(boxCard);
  boxCard.appendChild(game);

  box.style.height = "auto";

  min.textContent = "min";
  sek.textContent = "sek";
  time.textContent = "00.00";
  startOver.textContent = "Начать заново";

  game.style.gridTemplateColumns = "repeat(6, 8rem)";

  function randomize() {
    const cardData = cardList();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
  }

  function getCardField() {
    function getCreatedCard() {
      const cardData = randomize();
      const card = document.createElement("div");
      const face = document.createElement("img");
      const back = document.createElement("div");
      card.classList = "card";
      face.classList = "face";
      back.classList = "back";
      card.appendChild(face);
      card.appendChild(back);

      cardData.forEach((item) => {
        face.src = item.image;
        card.setAttribute("name", item.name);
      });

      card.addEventListener("click", (event) => {
        card.classList.toggle("flip-card");
        checkCard(event);
        console.log("a");
      });

      setTimeout(() => card.classList.add("flip-card"), 1000);
      setTimeout(() => card.classList.remove("flip-card"), 3000);
      return card;
    }
    for (let index = 0; index < 6; index++) {
      game.appendChild(getCreatedCard("card"));
    }

    const checkCard = (event) => {
      const clickedCard = event.target;
      clickedCard.classList.add("flipped");
      const flippedCards = document.querySelectorAll(".flipped");
      //Условие, если перевернуты две карты.
      if (flippedCards.length === 2) {
        //То, еслт одна перевёрнутая карта по имени одинакова с другой
        if (
          flippedCards[0].getAttribute("name") ===
          flippedCards[1].getAttribute("name")
        ) {
          //то, должна оставться и не поворачиваться
          flippedCards.forEach((card) => {
            card.classList.remove("flipped");
            card.style.pointerEvents = "none";
          });
          console.log("Одинаковые");
        } else {
          //а тут должна наоборот, если не одинаковые названия, то должны отворачиваться...
          flippedCards.forEach((card) => {
            card.classList.remove("flipped");
            setTimeout(() => card.classList.remove("flip-card"), 1000);
          });
          console.log("Не одинаковые");
        }
      }
    };
  }

  getCardField();
}

//Второе игровое поле
function showTheSecondLevel() {
  difficultySelection.parentNode.remove();

  const allBox = document.createElement("div");
  const upBox = document.createElement("div");
  const timer = document.createElement("div");
  const text = document.createElement("div");
  const min = document.createElement("p");
  const sek = document.createElement("p");
  const time = document.createElement("p");
  const startOver = document.createElement("button");
  const boxCard = document.createElement("div");
  const game = document.createElement("section");

  upBox.classList = "up-box";
  timer.classList = "timer";
  text.classList = "text-box";
  min.classList = "time-text";
  sek.classList = "time-text";
  time.classList = "time";
  startOver.classList = "restart";
  boxCard.classList = "box-card";
  game.classList = "game";

  area.appendChild(allBox);
  allBox.appendChild(upBox);
  upBox.appendChild(timer);
  timer.appendChild(text);
  text.appendChild(min);
  text.appendChild(sek);
  timer.appendChild(time);
  upBox.appendChild(startOver);
  allBox.appendChild(boxCard);
  boxCard.appendChild(game);

  box.style.height = "auto";

  min.textContent = "min";
  sek.textContent = "sek";
  time.textContent = "00.00";
  startOver.textContent = "Начать заново";

  game.style.gridTemplateColumns = "repeat(4, 8rem)";

  function randomize() {
    const cardData = cardList();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
  }

  function getCardField() {
    function getCreatedCard() {
      const cardData = randomize();
      const card = document.createElement("div");
      const face = document.createElement("img");
      const back = document.createElement("div");
      card.classList = "card";
      face.classList = "face";
      back.classList = "back";
      card.appendChild(face);
      card.appendChild(back);

      cardData.forEach((item) => {
        face.src = item.image;
        card.setAttribute("name", item.name);
      });

      card.addEventListener("click", (event) => {
        card.classList.toggle("flip-card");
        checkCard(event);
        console.log("a");
      });

      setTimeout(() => card.classList.add("flip-card"), 1000);
      setTimeout(() => card.classList.remove("flip-card"), 5000);
      return card;
    }
    for (let index = 0; index < 12; index++) {
      game.appendChild(getCreatedCard("card"));
    }

    const checkCard = (event) => {
      const clickedCard = event.target;
      clickedCard.classList.add("flipped");
      const flippedCards = document.querySelectorAll(".flipped");

      if (flippedCards.length === 2) {
        if (
          flippedCards[0].getAttribute("name") ===
          flippedCards[1].getAttribute("name")
        ) {
          flippedCards.forEach((card) => {
            card.classList.remove("flipped");
            card.style.pointerEvents = "none";
          });
          console.log("Одинаковые");
        } else {
          flippedCards.forEach((card) => {
            card.classList.remove("flipped");
            setTimeout(() => card.classList.remove("flip-card"), 1000);
          });
          console.log("Не одинаковые");
        }
      }
    };
  }

  getCardField();
}

//Третье игровое поле
function showTheThirdLevel() {
  difficultySelection.parentNode.remove();

  const allBox = document.createElement("div");
  const upBox = document.createElement("div");
  const timer = document.createElement("div");
  const text = document.createElement("div");
  const min = document.createElement("p");
  const sek = document.createElement("p");
  const time = document.createElement("p");
  const startOver = document.createElement("button");
  const boxCard = document.createElement("div");
  const game = document.createElement("section");

  upBox.classList = "up-box";
  timer.classList = "timer";
  text.classList = "text-box";
  min.classList = "time-text";
  sek.classList = "time-text";
  time.classList = "time";
  startOver.classList = "restart";
  boxCard.classList = "box-card";
  game.classList = "game";

  area.appendChild(allBox);
  allBox.appendChild(upBox);
  upBox.appendChild(timer);
  timer.appendChild(text);
  text.appendChild(min);
  text.appendChild(sek);
  timer.appendChild(time);
  upBox.appendChild(startOver);
  allBox.appendChild(boxCard);
  boxCard.appendChild(game);

  box.style.height = "auto";

  min.textContent = "min";
  sek.textContent = "sek";
  time.textContent = "00.00";
  startOver.textContent = "Начать заново";

  game.style.gridTemplateColumns = "repeat(9, 8rem)";

  function randomize() {
    const cardData = cardList();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
  }

  function getCardField() {
    function getCreatedCard() {
      const cardData = randomize();
      const card = document.createElement("div");
      const face = document.createElement("img");
      const back = document.createElement("div");
      card.classList = "card";
      face.classList = "face";
      back.classList = "back";
      card.appendChild(face);
      card.appendChild(back);

      cardData.forEach((item) => {
        face.src = item.image;
        card.setAttribute("name", item.name);
      });

      card.addEventListener("click", (event) => {
        card.classList.toggle("flip-card");
        checkCard(event);
        console.log("a");
      });

      setTimeout(() => card.classList.add("flip-card"), 1000);
      setTimeout(() => card.classList.remove("flip-card"), 5000);
      return card;
    }
    for (let index = 0; index < 18; index++) {
      game.appendChild(getCreatedCard("card"));
    }

    const checkCard = (event) => {
      const clickedCard = event.target;
      clickedCard.classList.add("flipped");
      const flippedCards = document.querySelectorAll(".flipped");

      if (flippedCards.length === 2) {
        if (
          flippedCards[0].getAttribute("name") ===
          flippedCards[1].getAttribute("name")
        ) {
          flippedCards.forEach((card) => {
            card.classList.remove("flipped");
            card.style.pointerEvents = "none";
          });
          console.log("Одинаковые");
        } else {
          flippedCards.forEach((card) => {
            card.classList.remove("flipped");
            setTimeout(() => card.classList.remove("flip-card"), 1000);
          });
          console.log("Не одинаковые");
        }
      }
    };
  }

  getCardField();
}
