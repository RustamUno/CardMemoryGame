const boxLvl = document.querySelector(".box-one");

const upBox = document.createElement("div");
const timer = document.createElement("div");
const text = document.createElement("div");
const timeMin = document.createElement("p");
const timeSek = document.createElement("p");
const time = document.createElement("p");
const btnBox = document.createElement("div");
const btn = document.createElement("button");
const game = document.createElement("div");

upBox.classList = "up-box";
timer.classList = "timer";
text.classList = "text";
timeMin.classList = "time-text";
timeSek.classList = "time-text";
time.classList = "time";
btnBox.classList = "btn-box";
btn.classList = "btn";
game.classList = "game";

timeMin.textContent = "min";
timeSek.textContent = "sek";
time.textContent = "00.00";
btn.textContent = "Начать заново";

boxLvl.appendChild(upBox);
upBox.appendChild(timer);
upBox.appendChild(btnBox);
boxLvl.appendChild(game);
timer.appendChild(text);
timer.appendChild(time);
text.appendChild(timeMin);
text.appendChild(timeSek);
btnBox.appendChild(btn);

function getCreatedCards(className) {
  let card = document.createElement("div");
  card.classList = "card";
  return card;
}
for (let i = 0; i < 18; i++) {
  game.appendChild(getCreatedCards("card"));
}
