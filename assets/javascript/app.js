var intervalId;
var time;

var gameState = {
  display: {
    timer: $(".timer-text"),
    question: $(".question-text"),
    answer1: $(".answer-text-1"),
    answer2: $(".answer-text-2"),
    answer3: $(".answer-text-3"),
    answer4: $(".answer-text-4"),
  },

  questions: [
    {
      question: "What makes up the combustion process?",
      answer1: "Spark",
      answer2: "Air",
      answer3: "Fuel",
      answer4: "All of the above",
    }
  ],

  populateForm(obj) {
    gameState.display.question.text(obj.question);
    gameState.display.answer1.text(obj.answer1);
    gameState.display.answer2.text(obj.answer2);
    gameState.display.answer3.text(obj.answer3);
    gameState.display.answer4.text(obj.answer4);
  },

  // timer functions and properties
  timer: {
    // amount of time allotted to player
    timeGiven: 25,
    // clears interval from function
    stop(){
      clearInterval(intervalId);
    },

    // decrement function that counts down
    decrement(){
      time--;
      gameState.display.timer.text(time);
      console.log('Time', time);

      // if time is 0, time is up lol
      if(time == 0){
        console.log('Done');
        gameState.timer.stop();
      }
    },

    // runs the timer and sets the interval that time decrements
    // currently a low value for debug purposes
    run() {
      gameState.click();
      intervalId = setInterval(this.decrement, 1000);
    },
  },

  // function to capture clicks 
  // most likely possible to make this more dry, but save that for later
  click() {
    this.display.answer1.click(function() {
      console.log('Clicked answer 1');
      console.log("Answer1:", gameState.display.answer1.text());
    });

    this.display.answer2.click(function() {
      console.log('Clicked answer 2');
      console.log("Answer2:", gameState.display.answer2.text());
    });

    this.display.answer3.click(function(){
      console.log('Clicked answer 3');
      console.log("Answer3:", gameState.display.answer3.text());
    });

    this.display.answer4.click(function() {
      console.log('Clicked answer 4');
      console.log("Answer4:", gameState.display.answer4.text());
    });
  },


  init() {
    // initialize global variale time with user's alloted itme
    time = gameState.timer.timeGiven;
    // set the HTML to time otherwise it will only display after the first
    // decrementation
    gameState.display.timer.text(time);
    // get an index for a random question/answer
    var questionInd = Math.floor(Math.random(gameState.questions.length - 0) + 0);
    console.log('questionInd :', questionInd);
    // populates HTML with a question and answers
    gameState.populateForm(gameState.questions[questionInd]);
  }
};

gameState.init();
gameState.timer.run();

