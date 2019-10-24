var intervalId;
var gameState = {
  display: {
    timer: $(".timer-text"),
    question: $(".question-text"),
    answer1: $(".answer-text-1"),
    answer2: $(".answer-text-2"),
    answer3: $(".answer-text-3"),
    answer4: $(".answer-text-4"),
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
  },

  timer: {
    twentyFive: 25,
    decrement(){
      time--;
      console.log('Time', time);
      if(time == 0){
        console.log('Done');
        gameState.timer.stop();
      }
    },

    stop(){
      clearInterval(intervalId);
    },

    run() {
      intervalId = setInterval(this.decrement, 100);
    }
  },
};

var time = gameState.timer.twentyFive;
gameState.timer.run();

