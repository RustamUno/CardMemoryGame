//Первое игровое поле
function showTheFirstLevel() {
      difficultySelection.parentNode.remove();
        
      const allBox = document.createElement("div");
      const upBox = document.createElement("div");
      const timer = document.createElement("div");
      const text = document.createElement("div");
      const min = document.createElement("p");
      const sek = document.createElement("p");
      const timersBox = document.createElement("div");
      const seconds = document.createElement("span");
      const minutes = document.createElement("span");
      const dot = document.createElement("p");
      const startOver = document.createElement("button");
      const boxCard = document.createElement("div");
      const game = document.createElement("section");
        
      upBox.classList = "up-box";
      timer.classList = "timer";
      text.classList = "text-box";
      min.classList = "time-text";
      sek.classList = "time-text";
      timersBox.classList = "timers-box"
      seconds.classList = "seconds";
      dot.classList = "seconds";
      minutes.classList = "minutes";
      startOver.classList = "restart";
      boxCard.classList = "box-card";
      game.classList = "game";
        
      area.appendChild(allBox);
      allBox.appendChild(upBox);
      upBox.appendChild(timer);
      timer.appendChild(text);
      text.appendChild(min);
      text.appendChild(sek);
      timer.appendChild(timersBox)
      timersBox.appendChild(minutes);
      timersBox.appendChild(dot);
      timersBox.appendChild(seconds);
      upBox.appendChild(startOver);
      allBox.appendChild(boxCard);
      boxCard.appendChild(game);
        
      box.style.height = "auto";
        
      min.textContent = "min";
      sek.textContent = "sek";
      seconds.textContent = "00";
      dot.textContent = ".";
      minutes.textContent = "00";
      startOver.textContent = "Начать заново";
        
      game.style.gridTemplateColumns = "repeat(6, 8rem)";
    
      let milisec = 0;
      let second = 0;
      let minute = 0;
      let Interval;

      let arrayName = [];
      let arrayCards = [];

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

      function startTimer () {
            milisec++;
            if(milisec < 9){
            }
            if(milisec>9){
            }
            if(milisec>99){
                  second++;
                  seconds.innerText = "0" + second;
                  milisec = 0;
                  seconds.innerText = "0" + milisec;
            }
            if(second < 9){
                  seconds.innerText = "0" + second;
            }
            if(second>9){
                  seconds.innerText = second;
            }
            if(second > 60){
                  minute++;
                  minutes.innerText = "0" + minute;
                  second = 0;
                  seconds.innerText = "0" + second;
            }
            if(minute>9){
                  minutes.innerText = minute;
            }
          
          }
      
        
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
              face.setAttribute("name", item.name);
          //     console.log(game);

          card.addEventListener("click", (event)=>{
            card.classList.toggle("flip-card")
            arrayName.push(face.getAttribute("name"));
            if(arrayName.length === 2){
                  if(arrayName[0]===arrayName[1]){
                        arrayCards.push(face.getAttribute("name"));
                        arrayName = [];
                        // console.log(arrayCards);
                  }else{
                        arrayName=[];
                        gameResultsLose();
                  }
            }
            if(arrayCards.length === 3){
                  gameResults()
            }
          })
          setTimeout(()=>card.classList.add("flip-card"), 1000);
          setTimeout(()=>card.classList.remove("flip-card"), 3000);
          
          startOver.addEventListener("click", (event)=>{            
            restart();
            setTimeout(()=>card.classList.add("flip-card"), 1000);
            setTimeout(()=>card.classList.remove("flip-card"), 3000);
            })  
          })
          Interval = setInterval(startTimer, 10);


      }

      getCardField();

      const restart = ()=>{
            let cardData = randomize();
            let faces = document.querySelectorAll(".face");
            let cards = document.querySelectorAll(".card");

            cardData.forEach((item, index)=>{
                  cards[index].classList.remove("flip-card");
                  faces[index].src = item.image;
            })
      }
      function gameResults(){
            clearInterval(Interval);
            upBox.classList.add("blur");
            boxCard.classList.add("blur");
            const gameResults = document.createElement("div");
            const spent = document.createElement("div");
            const result = document.createElement("div");
            const btn = document.createElement("button");
            gameResults.classList = "game-results";
            result.classList = "result";
            spent.classList = "spent";
            timersBox.classList = "stop";
            minutes.classList = "change-numbers";
            dot.classList = "change-numbers";
            seconds.classList = "change-numbers";
            btn.classList = "restart";
            spent.textContent = "Вы выиграли!";
            result.textContent = "Затраченное время:";
            btn.textContent = "Играть снова";
            area.appendChild(gameResults);
            gameResults.appendChild(spent);
            spent.appendChild(result);
            result.appendChild(timersBox);
            spent.appendChild(btn);

            btn.addEventListener("click", (e)=>{
                  restart();
                  Interval = setInterval(startTimer, 10);
                  upBox.classList.remove("blur");
                  boxCard.classList.remove("blur");
                  gameResults.remove();
            })
      }
      
      function gameResultsLose(){
            clearInterval(Interval);
            upBox.classList.add("blur");
            boxCard.classList.add("blur");
            const gameResults = document.createElement("div");
            const spent = document.createElement("div");
            const result = document.createElement("div");
            const btn = document.createElement("button");
            gameResults.classList = "game-lose";
            result.classList = "result";
            spent.classList = "spent";
            timersBox.classList = "stop";
            minutes.classList = "change-numbers";
            dot.classList = "change-numbers";
            seconds.classList = "change-numbers";
            btn.classList = "restart";
            spent.textContent = "Вы програли!";
            result.textContent = "Затраченное время:";
            btn.textContent = "Играть снова";
            area.appendChild(gameResults);
            gameResults.appendChild(spent);
            spent.appendChild(result);
            result.appendChild(timersBox);
            spent.appendChild(btn);

            btn.addEventListener("click", (e)=>{
                  restart();
                  Interval = setInterval(startTimer, 10);
                  upBox.classList.remove("blur");
                  boxCard.classList.remove("blur");
                  gameResults.remove();
            })
      }

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
      const timersBox = document.createElement("div");
      const seconds = document.createElement("span");
      const minutes = document.createElement("span");
      const dot = document.createElement("p");
      const startOver = document.createElement("button");
      const boxCard = document.createElement("div");
      const game = document.createElement("section");
        
      upBox.classList = "up-box";
      timer.classList = "timer";
      text.classList = "text-box";
      min.classList = "time-text";
      sek.classList = "time-text";
      timersBox.classList = "timers-box"
      seconds.classList = "seconds";
      dot.classList = "seconds";
      minutes.classList = "minutes";
      startOver.classList = "restart";
      boxCard.classList = "box-card";
      game.classList = "game";
        
      area.appendChild(allBox);
      allBox.appendChild(upBox);
      upBox.appendChild(timer);
      timer.appendChild(text);
      text.appendChild(min);
      text.appendChild(sek);
      timer.appendChild(timersBox)
      timersBox.appendChild(minutes);
      timersBox.appendChild(dot);
      timersBox.appendChild(seconds);
      upBox.appendChild(startOver);
      allBox.appendChild(boxCard);
      boxCard.appendChild(game);
        
      box.style.height = "auto";
        
      min.textContent = "min";
      sek.textContent = "sek";
      seconds.textContent = "00";
      dot.textContent = ".";
      minutes.textContent = "00";
      startOver.textContent = "Начать заново";
        
      game.style.gridTemplateColumns = "repeat(6, 8rem)";
    
      let milisec = 0;
      let second = 0;
      let minute = 0;
      let Interval;

      let arrayName = [];
      let arrayCards = [];

      function randomize(){
            let cardData = [];
            let cardListRandom = cardList.sort(()=> Math.random()-0.5);
            for(let i =0; i<6;i++){
                  cardData.push(cardListRandom[i]);
                }
            cardData=cardData.concat(cardData);
            return cardData;
    
      }
    
      function shuffleCard(cards){
          cards.sort(()=> Math.random()-0.5);
      }

      function startTimer () {
            milisec++;
            if(milisec < 9){
            }
            if(milisec>9){
            }
            if(milisec>99){
                  second++;
                  seconds.innerText = "0" + second;
                  milisec = 0;
                  seconds.innerText = "0" + milisec;
            }
            if(second < 9){
                  seconds.innerText = "0" + second;
            }
            if(second>9){
                  seconds.innerText = second;
            }
            if(second > 60){
                  minute++;
                  minutes.innerText = "0" + minute;
                  second = 0;
                  seconds.innerText = "0" + second;
            }
            if(minute>9){
                  minutes.innerText = minute;
            }
          
          }
      
        
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
              face.setAttribute("name", item.name);
          //     console.log(game);

          card.addEventListener("click", (event)=>{
            card.classList.toggle("flip-card")
            arrayName.push(face.getAttribute("name"));
            if(arrayName.length === 2){
                  if(arrayName[0]===arrayName[1]){
                        arrayCards.push(face.getAttribute("name"));
                        arrayName = [];
                        // console.log(arrayCards);
                  }else{
                        arrayName=[];
                        gameResultsLose();
                  }
            }
            if(arrayCards.length === 6){
                  gameResults()
            }
          })
          setTimeout(()=>card.classList.add("flip-card"), 1000);
          setTimeout(()=>card.classList.remove("flip-card"), 3000);
          
          startOver.addEventListener("click", (event)=>{            
            restart();
            setTimeout(()=>card.classList.add("flip-card"), 1000);
            setTimeout(()=>card.classList.remove("flip-card"), 3000);
            })  
          })
          Interval = setInterval(startTimer, 10);


      }

      getCardField();

      const restart = ()=>{
            let cardData = randomize();
            let faces = document.querySelectorAll(".face");
            let cards = document.querySelectorAll(".card");

            cardData.forEach((item, index)=>{
                  cards[index].classList.remove("flip-card");
                  faces[index].src = item.image;
            })
      }
      function gameResults(){
            clearInterval(Interval);
            upBox.classList.add("blur");
            boxCard.classList.add("blur");
            const gameResults = document.createElement("div");
            const spent = document.createElement("div");
            const result = document.createElement("div");
            const btn = document.createElement("button");
            gameResults.classList = "game-results";
            result.classList = "result";
            spent.classList = "spent";
            timersBox.classList = "stop";
            minutes.classList = "change-numbers";
            dot.classList = "change-numbers";
            seconds.classList = "change-numbers";
            btn.classList = "restart";
            spent.textContent = "Вы выиграли!";
            result.textContent = "Затраченное время:";
            btn.textContent = "Играть снова";
            area.appendChild(gameResults);
            gameResults.appendChild(spent);
            spent.appendChild(result);
            result.appendChild(timersBox);
            spent.appendChild(btn);

            btn.addEventListener("click", (e)=>{
                  restart();
                  Interval = setInterval(startTimer, 10);
                  upBox.classList.remove("blur");
                  boxCard.classList.remove("blur");
                  gameResults.remove();
            })
      }
      
      function gameResultsLose(){
            clearInterval(Interval);
            upBox.classList.add("blur");
            boxCard.classList.add("blur");
            const gameResults = document.createElement("div");
            const spent = document.createElement("div");
            const result = document.createElement("div");
            const btn = document.createElement("button");
            gameResults.classList = "game-lose";
            result.classList = "result";
            spent.classList = "spent";
            timersBox.classList = "stop";
            minutes.classList = "change-numbers";
            dot.classList = "change-numbers";
            seconds.classList = "change-numbers";
            btn.classList = "restart";
            spent.textContent = "Вы програли!";
            result.textContent = "Затраченное время:";
            btn.textContent = "Играть снова";
            area.appendChild(gameResults);
            gameResults.appendChild(spent);
            spent.appendChild(result);
            result.appendChild(timersBox);
            spent.appendChild(btn);

            btn.addEventListener("click", (e)=>{
                  restart();
                  Interval = setInterval(startTimer, 10);
                  upBox.classList.remove("blur");
                  boxCard.classList.remove("blur");
                  gameResults.remove();
            })
      }

  }

//Третье игровое поле
function showTheThirdLevel() {
      difficultySelection.parentNode.remove();
        
      difficultySelection.parentNode.remove();
        
      const allBox = document.createElement("div");
      const upBox = document.createElement("div");
      const timer = document.createElement("div");
      const text = document.createElement("div");
      const min = document.createElement("p");
      const sek = document.createElement("p");
      const timersBox = document.createElement("div");
      const seconds = document.createElement("span");
      const minutes = document.createElement("span");
      const dot = document.createElement("p");
      const startOver = document.createElement("button");
      const boxCard = document.createElement("div");
      const game = document.createElement("section");
        
      upBox.classList = "up-box";
      timer.classList = "timer";
      text.classList = "text-box";
      min.classList = "time-text";
      sek.classList = "time-text";
      timersBox.classList = "timers-box"
      seconds.classList = "seconds";
      dot.classList = "seconds";
      minutes.classList = "minutes";
      startOver.classList = "restart";
      boxCard.classList = "box-card";
      game.classList = "game";
        
      area.appendChild(allBox);
      allBox.appendChild(upBox);
      upBox.appendChild(timer);
      timer.appendChild(text);
      text.appendChild(min);
      text.appendChild(sek);
      timer.appendChild(timersBox)
      timersBox.appendChild(minutes);
      timersBox.appendChild(dot);
      timersBox.appendChild(seconds);
      upBox.appendChild(startOver);
      allBox.appendChild(boxCard);
      boxCard.appendChild(game);
        
      box.style.height = "auto";
        
      min.textContent = "min";
      sek.textContent = "sek";
      seconds.textContent = "00";
      dot.textContent = ".";
      minutes.textContent = "00";
      startOver.textContent = "Начать заново";
        
      game.style.gridTemplateColumns = "repeat(6, 8rem)";
    
      let milisec = 0;
      let second = 0;
      let minute = 0;
      let Interval;

      let arrayName = [];
      let arrayCards = [];

      function randomize(){
            let cardData = [];
            let cardListRandom = cardList.sort(()=> Math.random()-0.5);
            for(let i =0; i<9;i++){
                  cardData.push(cardListRandom[i]);
                }
            cardData=cardData.concat(cardData);
            return cardData;
    
      }
    
      function shuffleCard(cards){
          cards.sort(()=> Math.random()-0.5);
      }

      function startTimer () {
            milisec++;
            if(milisec < 9){
            }
            if(milisec>9){
            }
            if(milisec>99){
                  second++;
                  seconds.innerText = "0" + second;
                  milisec = 0;
                  seconds.innerText = "0" + milisec;
            }
            if(second < 9){
                  seconds.innerText = "0" + second;
            }
            if(second>9){
                  seconds.innerText = second;
            }
            if(second > 60){
                  minute++;
                  minutes.innerText = "0" + minute;
                  second = 0;
                  seconds.innerText = "0" + second;
            }
            if(minute>9){
                  minutes.innerText = minute;
            }
          
          }
      
        
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
              face.setAttribute("name", item.name);
          //     console.log(game);

          card.addEventListener("click", (event)=>{
            card.classList.toggle("flip-card")
            arrayName.push(face.getAttribute("name"));
            if(arrayName.length === 2){
                  if(arrayName[0]===arrayName[1]){
                        arrayCards.push(face.getAttribute("name"));
                        arrayName = [];
                        // console.log(arrayCards);
                  }else{
                        arrayName=[];
                        gameResultsLose();
                  }
            }
            if(arrayCards.length === 9){
                  gameResults()
            }
          })
          setTimeout(()=>card.classList.add("flip-card"), 1000);
          setTimeout(()=>card.classList.remove("flip-card"), 3000);
          
          startOver.addEventListener("click", (event)=>{            
            restart();
            setTimeout(()=>card.classList.add("flip-card"), 1000);
            setTimeout(()=>card.classList.remove("flip-card"), 3000);
            })  
          })
          Interval = setInterval(startTimer, 10);


      }

      getCardField();

      const restart = ()=>{
            let cardData = randomize();
            let faces = document.querySelectorAll(".face");
            let cards = document.querySelectorAll(".card");

            cardData.forEach((item, index)=>{
                  cards[index].classList.remove("flip-card");
                  faces[index].src = item.image;
            })
      }
      function gameResults(){
            clearInterval(Interval);
            upBox.classList.add("blur");
            boxCard.classList.add("blur");
            const gameResults = document.createElement("div");
            const spent = document.createElement("div");
            const result = document.createElement("div");
            const btn = document.createElement("button");
            gameResults.classList = "game-results";
            result.classList = "result";
            spent.classList = "spent";
            timersBox.classList = "stop";
            minutes.classList = "change-numbers";
            dot.classList = "change-numbers";
            seconds.classList = "change-numbers";
            btn.classList = "restart";
            spent.textContent = "Вы выиграли!";
            result.textContent = "Затраченное время:";
            btn.textContent = "Играть снова";
            area.appendChild(gameResults);
            gameResults.appendChild(spent);
            spent.appendChild(result);
            result.appendChild(timersBox);
            spent.appendChild(btn);

            btn.addEventListener("click", (e)=>{
                  restart();
                  Interval = setInterval(startTimer, 10);
                  upBox.classList.remove("blur");
                  boxCard.classList.remove("blur");
                  gameResults.remove();
            })
      }
      
      function gameResultsLose(){
            clearInterval(Interval);
            upBox.classList.add("blur");
            boxCard.classList.add("blur");
            const gameResults = document.createElement("div");
            const spent = document.createElement("div");
            const result = document.createElement("div");
            const btn = document.createElement("button");
            gameResults.classList = "game-lose";
            result.classList = "result";
            spent.classList = "spent";
            timersBox.classList = "stop";
            minutes.classList = "change-numbers";
            dot.classList = "change-numbers";
            seconds.classList = "change-numbers";
            btn.classList = "restart";
            spent.textContent = "Вы програли!";
            result.textContent = "Затраченное время:";
            btn.textContent = "Играть снова";
            area.appendChild(gameResults);
            gameResults.appendChild(spent);
            spent.appendChild(result);
            result.appendChild(timersBox);
            spent.appendChild(btn);

            btn.addEventListener("click", (e)=>{
                  restart();
                  Interval = setInterval(startTimer, 10);
                  upBox.classList.remove("blur");
                  boxCard.classList.remove("blur");
                  gameResults.remove();
            })
      }
}
