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
    image: "./img/6 бубны.svg",
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
    image: "./img/7 бубны.svg",
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
    image: "./img/8 бубны.svg",
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
    image: "./img/9 бубны.svg",
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
    image: "./img/10 бубны.svg",
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
    image: "./img/валет бубны.svg",
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
    image: "./img/дама бубны.svg",
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

const boxLvl = document.querySelector(".box-one");

const upBox = document.createElement("div");
const timer = document.createElement("div");
const text = document.createElement("div");
const timeMin = document.createElement("p");
const timeSek = document.createElement("p");
const time = document.createElement("p");
const btnBox = document.createElement("div");
const btn = document.createElement("button");
const boxCard = document.createElement("div");
const game = document.createElement("section");

upBox.classList = "up-box";
timer.classList = "timer";
text.classList = "text";
timeMin.classList = "time-text";
timeSek.classList = "time-text";
time.classList = "time";
btnBox.classList = "btn-box";
btn.classList = "btn";
boxCard.classList = "box-card";
game.classList = "game";

timeMin.textContent = "min";
timeSek.textContent = "sek";
time.textContent = "00.00";
btn.textContent = "Начать заново";

boxLvl.appendChild(upBox);
boxLvl.appendChild(boxCard);
upBox.appendChild(timer);
upBox.appendChild(btnBox);
boxLvl.appendChild(game);
timer.appendChild(text);
timer.appendChild(time);
text.appendChild(timeMin);
text.appendChild(timeSek);
btnBox.appendChild(btn);

// function getCreatedCards(className) {
//   const card = document.createElement("div");
//   card.classList = "card";
//   return card;
// }
// for (let i = 0; i < 36; i++) {
//   game.appendChild(getCreatedCards("card"));
// }

// function randomize() {
const cardData = cardList();
//   cardData.sort(() => Math.random() - 0.5);
//   return cardData;
// }

function cardGenerator() {
  // const cardData = randomize();
  cardData.forEach((item) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
    face.src = item.image;
    boxCard.appendChild(game);
    game.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener("click", (event) => {
      card.classList.toggle("flip-card");
    });
  });
}
cardGenerator();
