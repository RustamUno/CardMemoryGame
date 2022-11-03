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

      let startCounting = document.querySelector(".time");
      let seconds = 0;
      let minutes = 0;
      let timers;

  function randomize(){
        let cardData = [];
        let cardListRandom = cardList.sort(()=> Math.random()-0.5);
        for(let i =0; i<3;i++){
              cardData.push(cardListRandom[i]);
            }
        cardData=cardData.concat(cardData);
        return cardData;

  }

  function shuffleCard(cards){
      cards.sort(()=> Math.random()-0.5);
  }

  function countdown(){
      // debugger
      seconds +=1;
      if(seconds>59){
            seconds=0;
            minutes+=1;
      }
      if(minutes>59){
            minutes = 0;
            hors +=1;
      }
      startCounting.textContent = `${minutes.toString().padStart(2, 0)}.${seconds.toString().padStart(2,0)}`
}
      timers = setInterval(countdown, 1000), 1000;
    
  function getCardField(){
      const cardData = randomize();
      // console.log(cardData);

      shuffleCard(cardData);
      // console.log(cardData);

      cardData.forEach(item=>{
          const card = document.createElement("div");
          const face = document.createElement("img");
          const back = document.createElement("div");
          card.classList = "card";
          face.classList = "face";
          back.classList = "back";
          card.appendChild(face);
          card.appendChild(back);
          game.appendChild(card);

          face.src = item.image;
          card.setAttribute("name", item.name);
      //     console.log(game);
      setTimeout(()=>card.classList.add("flip-card"), 1000);
      setTimeout(()=>card.classList.remove("flip-card"), 3000);


            card.addEventListener("click", (event)=>{
                  card.classList.toggle("flip-card");
                  checkCard(event);
            });

            const checkCard = (event)=>{
                  const clickedCard = event.target;
                  clickedCard.classList.add("flipped");
                  const flippedCards = document.querySelectorAll(".flipped");
                  if(flippedCards.length === 2){
                        if(flippedCards[0].getAttribute("name") === flippedCards[1].getAttribute("name")){
                              flippedCards.forEach(card=>{
                                    card.classList.remove("flipped");
                                    card.style.pointerEvents = "none";
                              });
                              console.log('twice');
                        }else{
                              flippedCards.forEach((card)=>{
                                    card.classList.remove("flipped");
                                    setTimeout(()=>card.classList.remove("flip-card"), 1000)
                              })
                        }
                  }
            }
            
      })

  }
      getCardField()
}