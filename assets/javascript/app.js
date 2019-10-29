// variables that need global scope
var intervalId;
var time;
var questionInd = 0;


// aux functions
// generates random index of an array
var getNextIndex = (array) => {
  var result = questionInd;
  if(questionInd < array.length-1) {
    result += 1;
  } else {
    console.log("You've run out of questions!");
  }
  return result;
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
      q: "What does it generally mean, when coolant is in the oil or vice versa?",
      a1: "Head gasket is hurt",
      a2: "Crank seal crapped out",
      a3: "Rear main seal wrecked",
      a4: "Valve cover gasket gone",
      ans: "Head gasket is hurt",
    },
  ],

  populateForm(obj) {
    gameState.display.question.empty();
    gameState.display.question.text(obj.q);
    gameState.display.answer1.empty();
    gameState.display.answer1.text(obj.a1);
    gameState.display.answer2.empty();
    gameState.display.answer2.text(obj.a2);
    gameState.display.answer3.empty();
    gameState.display.answer3.text(obj.a3);
    gameState.display.answer4.empty();
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
      intervalId = setInterval(this.decrement, 1000);        
      $(".ans").click(function() {
        var curr = $(this);
        console.log("Current clicked item:", curr.text());
  
        if(curr.text() === gameState.questions[questionInd].ans) {
          console.log("WINNER WINNER CHICKEN DINNER");
          gameState.timer.stop();
        } else if (curr.text() !== gameState.questions[questionInd].ans) { 
          console.log("o boyo");
          gameState.timer.stop();
          console.log("The correct answer is:", gameState.questions[questionInd].ans);
        }
        gameState.nextQuestion();
      });
    },
  },

  nextQuestion() {
    time = gameState.timer.timeGiven;
    gameState.display.timer.text(time);

    questionInd = getNextIndex(gameState.questions);
    console.log("questionInd:", questionInd);
    gameState.populateForm(gameState.questions[questionInd]);
    gameState.timer.run();
  },


  init() {
    time = gameState.timer.timeGiven;
    gameState.display.timer.text(time);
    gameState.populateForm(gameState.questions[questionInd]);
  }
};

gameState.init();
gameState.timer.run();

