var intervalId;
var time;

// aux functions
// generates random index of an array
var getRandomIndex = (array) => {
  var min = 0;
  var max = array.length - 1;
  var result = Math.random() * (max - min + 1) + min;
  return Math.floor(result);
}

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
      q: "What makes up the combustion process?",
      a1: "Spark",
      a2: "Air",
      a3: "Fuel",
      a4: "All of the above",
      ans: "All of the above",
    },
    {
      q: "What ULTIMATELY transfers power from the engine to the wheels?",
      a1: "Driveshaft",
      a2: "Differential",
      a3: "Transmission",
      a4: "Crankshaft",
      ans: "Differential",
    },
    {
      q: "What generates enough voltage required to create spark?",
      a1: "Spark plugs",
      a2: "Alternator",
      a3: "Ignition Coil",
      a4: "Battery",
      ans: "Ignition Coil",
    },
    {
      q: "Where doesn't (or shouldn't) the motor oil reach?",
      a1: "Cylinder wall",
      a2: "Intake manifold",
      a3: "Radiator",
      a4: "Rod bearings",
      ans: "Radiator"
    }, 
    {
      q: "",
      a1: "",
      a2: "",
      a3: "",
      a4: "",
      ans: "",
    },
  ],

  populateForm(obj) {
    gameState.display.question.text(obj.q);
    gameState.display.answer1.text(obj.a1);
    gameState.display.answer2.text(obj.a2);
    gameState.display.answer3.text(obj.a3);
    gameState.display.answer4.text(obj.a4);
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
    // var questionInd = Math.random() * (gameState.questions.length - 0) + 0;
    var questionInd = getRandomIndex(gameState.questions);
    // debug
    console.log('gameState.questions.length :', gameState.questions.length);
    console.log('questionInd :', questionInd);
    // populates HTML with a question and answers
    gameState.populateForm(gameState.questions[questionInd]);
  }
};

gameState.init();
gameState.timer.run();

