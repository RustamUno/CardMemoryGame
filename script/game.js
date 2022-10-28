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

  const arr = [];
  const arr2 = [];

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
        
        if(arr.length !== 3){
          arr.push(item.name)
            const generatedCard = arr.concat(arr);
            face.src = item.image;
            back.setAttribute("name", item.name);
            console.log(generatedCard);
        }
      });
 
      card.addEventListener("click", (event) => {
        card.classList.toggle("flip-card");
        checkCard(event);
      });

      let startCounting = document.querySelector(".time");
      let seconds = 0;
      let minutes = 0;
      let timers;

      function countdown() {
        seconds += 1;
        if (seconds > 59) {
          seconds = 0;
          minutes += 1;
        }
        if (minutes > 59) {
          minutes = 0;
          hours += 1;
        }
        startCounting.textContent = `${minutes
          .toString()
          .padStart(2, 0)}.${seconds.toString().padStart(2, 0)}`;
      }
      setTimeout(
        () => card.classList.add("flip-card"),
        (timers = setInterval(countdown, 1000)),
        1000
      );
      setTimeout(() => card.classList.remove("flip-card"), 3000);
      return card;
    }

    // for(let i = 0; i< 3; i++){
      game.appendChild(getCreatedCard("card"));
      
      
    // }
   

    // const checkCard = (event) => {
    //   const clickedCard = event.target;
    //   clickedCard.classList.add("flipped");
    //   const flippedCards = document.querySelectorAll(".flipped");
    //   //Условие, если перевернуты две карты.
    //   if (flippedCards.length === 2) {
    //     //То, еслт одна перевёрнутая карта по имени одинакова с другой
    //     if (
    //       flippedCards[0].getAttribute("name") ===
    //       flippedCards[1].getAttribute("name")
    //     ) {
    //       //то, должна оставться и не поворачиваться
    //       flippedCards.forEach((card) => {
    //         card.classList.remove("flipped");
    //         card.style.pointerEvents = "none";
    //       });
    //       console.log("Одинаковые");
    //     } else {
    //       //а тут должна наоборот, если не одинаковые названия, то должны отворачиваться...
    //       flippedCards.forEach((card) => {
    //         card.classList.remove("flipped");
    //         setTimeout(() => card.classList.remove("flip-card"), 1000);
    //       });
    //       console.log("Не одинаковые");
    //     }
    //   }
    // };
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

      let startCounting = document.querySelector(".time");
      let seconds = 0;
      let minutes = 0;
      let timers;

      function countdown() {
        seconds += 1;
        if (seconds > 59) {
          seconds = 0;
          minutes += 1;
        }
        if (minutes > 59) {
          minutes = 0;
          hours += 1;
        }
        startCounting.textContent = `${minutes
          .toString()
          .padStart(2, 0)}.${seconds.toString().padStart(2, 0)}`;
      }
      setTimeout(
        () => card.classList.add("flip-card"),
        (timers = setInterval(countdown, 1000)),
        1000
      );
      setTimeout(() => card.classList.remove("flip-card"), 3000);
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

      let startCounting = document.querySelector(".time");
      let seconds = 0;
      let minutes = 0;
      let timers;

      function countdown() {
        seconds += 1;
        if (seconds > 59) {
          seconds = 0;
          minutes += 1;
        }
        if (minutes > 59) {
          minutes = 0;
          hours += 1;
        }
        startCounting.textContent = `${minutes
          .toString()
          .padStart(2, 0)}.${seconds.toString().padStart(2, 0)}`;
      }
      setTimeout(
        () => card.classList.add("flip-card"),
        (timers = setInterval(countdown, 1000)),
        1000
      );
      setTimeout(() => card.classList.remove("flip-card"), 3000);
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
