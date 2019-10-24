var gameState = {
  display: {
    timer: $(".timer-text"),
    question: $(".question-text"),
    answer1: $(".answer-text-1"),
    answer2: $(".answer-text-2"),
    answer3: $(".answer-text-3"),
    answer4: $(".answer-text-4"),
    
  },

  timer: {
    twentyFiveSec: 25,
    countDown() {
      gameState.display.timer.text(this.twentyFiveSec);
      this.twentyFiveSec--;
      console.log('timer.countDown', this.twentyFiveSec);
      if(this.twentyFiveSec == 0) {
        console.log("Time's up!");
      }
    },
  },

  update() {
    $(document).ready(function() {
      gameState.click();
      setInterval(gameState.timer.countDown, 1000);
    }); 
  },

  click() {
    this.display.answer1.click(function() {
      console.log('Clicked answer 1');
    });

    this.display.answer2.click(function() {
      console.log('Clicked answer 2');
    });

    this.display.answer3.click(function(){
      console.log('Clicked answer 3');
    });

    this.display.answer4.click(function() {
      console.log('Clicked answer 4');
    });
  }
};

gameState.update();