//Global section declaring variables.
var wins =0;
var loses =0;
var unanswered = 0;
var counter =30;
var userAnswer = [];
var timeInterval=undefined;
var myQuestions = {
  1: {
    "question": " Inside which HTML element do we put the JavaScript?",
    "answers": {
      1: '<js>',
      2: '<script>',
      3: '<scripting>',
      4: '<javascript>'
    },
    "correctAnswer": "2"
  }, 
  2: {
    "question": " What is the correct JavaScript syntax to change the content of the HTML element below? '\<'p id='demo'>This is a demonstration.'\<'/p>",
    "answers": {
      1: 'document.getElementById("demo").innerHTML = "Hello World!";',
      2: 'document.getElementByName("p").innerHTML = "Hello World!";',
      3: '#demo.innerHTML = "Hello World!";',
      4: 'document.getElement("p").innerHTML = "Hello World!";'
    },
    "correctAnswer": "1"

  },
  3: {
    "question": " Where is the correct place to insert a JavaScript?",
    "answers": {
      1: 'Both the <head> section and the <body> section are correct',
      2: 'The <body> section',
      3: 'The <head> section',
      4: 'the <footer> section'
    },
    "correctAnswer": "1"
  },
  4: {
    "question": " What is the correct syntax for referring to an external script called 'xxx.js'?",
    "answers": {
      1: "<script src='xxx.js'>",
      2: "<script href='xxx.js'>",
      3: "<script name='xxx.js'>",
      4: "None of the above"
    },
    "correctAnswer": "1"
  },
  5: {
    "question": " The external JavaScript file must contain the '\<'script> tag.",
    "answers": {
      1: "True",
      2: "False",
      3: "i don't know",
      4: "None of the above"
    },
    "correctAnswer": "2"
  },
  6:{
    "question": " How do you write 'Hello World' in an alert box?",
    "answers": {
      1: "msgBox('Hello World');",
      2: "alertBox('Hello World');",
      3: "alert('Hello World');",
      4: "msg('Hello World');"
    },
    "correctAnswer": "3"
  },
  7: {
    "question": " How do you create a function in JavaScript?",
    "answers": {
      1: "function = myFunction()",
      2: "function:myFunction()",
      3: "function myFunction()",
      4: "none of the above"
    },
    "correctAnswer": "1"
  },
  8: {
    "question": " How do you call a function named 'myFunction'?",
    "answers": {
      1: "call function myFunction()",
      2: " call myFunction()",
      3: " myFunction()",
      4: " none of the above"
    },
    "correctAnswer": "3"
  },
  9: {
    "question": " How to write an IF statement in JavaScript?",
    "answers": {
      1: "if (i == 5)",
      2: "if i = 5",
      3: "if i == 5 then",
      4: "if i = 5 then"
    },
    "correctAnswer": "1"
  },
  10: {
    "question": " How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    "answers": {
      1: "if i <> 5",
      2: "if (i <> 5)",
      3: "if i =! 5 then",
      4: "if (i != 5)"
    },
    "correctAnswer": "4"
  },
  11: {
    "question": " How does a WHILE loop start?",
    "answers": {
      1: "while (i <= 10; i++)",
      2: "while i = 1 to 10",
      3: "while (i <= 10)",
      4: " none of the above"
    },
    "correctAnswer": "3"
  },

  12: {
    "question": " How does a FOR loop start?",
    "answers": {
      1: "for (i <= 5; i++)",
      2: "for (i = 0; i <= 5; i++)",
      3: "for (i = 0; i <= 5)",
      4: "for i = 1 to 5"
    },
    "correctAnswer": "2"
  },
  13:{
    "question": " How can you add a comment in a JavaScript?",
    "answers": {
      1: " <!--This is a comment-->",
      2: " 'This is a comment",
      3: " //This is a comment",
      4:  "# this is a comment"
    },
    "correctAnswer": "3"
  },
  14: {
    "question": " How to insert a comment that has more than one line?",
    "answers": {
      1: " <!--This comment has more than one line-->",
      2: " //This comment has more than one line//",
      3: " /*This comment has more than one line*/",
      4:  "none of the above"
    },
    "correctAnswer": "3"
  },
  15: {
    "question": " What is the correct way to write a JavaScript array?",
    "answers": {
      1: "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')",
      2: "var colors = (1:'red', 2:'green', 3:'blue')",
      3: "var colors = ['red', 'green', 'blue']",
      4: "var colors = 'red', 'green', 'blue'"
    },
    "correctAnswer": "3"
  },
  16: {
    "question": " How do you round the number 7.25, to the nearest integer?",
    "answers": {
      1: "round(7.25)",
      2: "Math.rnd(7.25)",
      3: "Math.round(7.25)",
      4: "rnd(7.25)"
    },
    "correctAnswer": "3"
  },
  17:{
    "question": " How do you find the number with the highest value of x and y?",
    "answers": {
      1: "ceil(x, y)",
      2: "Math.max(x, y)",
      3: "top(x, y)",
      4: "Math.ceil(x, y)"
    },
    "correctAnswer": "2"
  },
  18: {
    "question": " What is the correct JavaScript syntax for opening a new window called 'w2'?",
    "answers": {
      1: "w2 = window.new('http://www.w3schools.com');",
      2: "w2 = window.open('http://www.w3schools.com');",
      3: "w2 = window.load('http://www.w3schools.com');",
      4: "none of the above"
    },
    "correctAnswer": "2"
  },
  19: {
    "question": " JavaScript is the same as Java.",
    "answers": {
      1: "False",
      2: "True",
      3: "none of the above",
      4: "nothing"        
    },
    "correctAnswer": "1"
  },
  20:{
    "question": " How can you detect the client's browser name?",
    "answers": {
      1: " browser.name",
      2: " client.navName",
      3: " navigator.appName",
      4:"none of the above"
    },
    "correctAnswer": "3"
  },
  21: {
    "question": " Which event occurs when the user clicks on an HTML element?",
    "answers": {
      1: "onmouseclick",
      2: "onchange",
      3: "onclick",
      4: "onmouseover"
    },
    "correctAnswer": "3"
  },
  22: {
    "question": " How do you declare a JavaScript variable?",
    "answers": {
      1: "v carName;",
      2: "var carName;",
      3: "variable carName;",
      4: "let carName"
    },
    "correctAnswer": "2"
  },
  23:{
    "question": " Which operator is used to assign a value to a variable?",
    "answers": {
      1: " x",
      2: " *",
      3: " =",
      4: " -"
    },
    "correctAnswer": "3"
  },
  24: {
    "question": " What will the following code return: Boolean(10 > 9)",
    "answers": {
      1: "true",
      2: "NaN",
      3: "false",
      4: "undefined"
    },
    "correctAnswer": "1"
  },
  25: {
    "question": " Is JavaScript case-sensitive?",
    "answers": {
      1: "No",
      2: "Yes",
      3: "I doubt it",
      4: "I don't know"
    },
    "correctAnswer": "2"
  }
  };

//document ready block.
$( document ).ready(function() {
  //creating the UI.
  appUI();
  // Submit button On click actions.
  $(document).on("click", ".submit", showResults);
  //Play button On Click actions.
  $(document).on("click", ".play", start);
 
});

//Start Timer function with SetInterval and ClearInterval.
function startTimer(){
  //Do code for showing the numbers here
  $('.counter').html("Time Remaining " + counter);
  if (timeInterval=== undefined){
    timeInterval = setInterval(function () {
      counter = counter -1;
      $('.counter').html("Time Remaining " + counter);
      if (counter<=0){
        clearInterval(timeInterval)
        showResults()
      }  
    }, 1000); 
  }
};
//Reset function to clear the Quiz body.
function reset(){
  counter =30;
  userAnswer = [];
  $('.quiz-body').empty();
}
 
// Game start function to add the Quiz questions after use clicks the play button.
function start(){
  wins =0;
  loses =0;
  unanswered=0;
  reset();
  //code to update the timer on the screen.
  var timerdiv = $('<div class="row text-center">')
  var timerCounter = $('<span>');
  timerCounter.addClass('counter');


  //adding timer counter to the screen.
  $('.quiz-body').append(timerdiv)
  timerdiv.append(timerCounter)
  // start Timer.
  startTimer(); //1000 will  run it every 1 second
  // creating Submit button 
  var submitDiv = $('<div class= "row text-center submitBtn">');
  var submitButton = $('<button>');
  submitButton.addClass('btn btn-primary btn-lg submit');
  submitButton.text("Submit");
  timerdiv.append(submitDiv);
  submitDiv.append(submitButton);
 // updating the quiz questions.
  buildQuiz();
}


function buildQuiz(){
  // code to create a division that holds the questions.
  var target = $('.quiz-body');
  var questionsDiv = $('<div class= "row" >');
  questionsDiv.attr('style', "overflow:scroll; width: content-width; height: 500px;");
  target.append(questionsDiv);
  // updating the questions to the UI.
  $.each(myQuestions, function (index, value){
    var questionForm = $('<form class="Question">');
    // creating a class name for Form with a number.
    qclass= "qClass" +  index;
    questionForm.addClass(qclass);
    questionsDiv.append(questionForm);
    questionForm.append(index + '. ' + myQuestions[index]["question"] + '<br>');
    questionForm.append($('<label>').text(" " + myQuestions[index]["answers"][1])
                   .prepend($('<input type="radio" name="mychoice" class ="radioBtn" id="1" autofocus>',
                              { value: myQuestions[index]["answers"][1]})));
    questionForm.append('<br>');
    questionForm.append($('<label>').text(" " + myQuestions[index]["answers"][2])
                   .prepend($('<input type="radio" name="mychoice" class="radioBtn" id="2" autofocus>',
                              { value: myQuestions[index]["answers"][2]})));
    questionForm.append('<br>');
    questionForm.append($('<label>').text(" " + myQuestions[index]["answers"][3])
                   .prepend($('<input type="radio" name="mychoice" class="radioBtn" id="3" autofocus>',
                              { value: myQuestions[index]["answers"][3]})));
    questionForm.append('<br>');
    questionForm.append($('<label>').text(" " + myQuestions[index]["answers"][4])
                   .prepend($('<input type="radio" name="mychoice" class="radioBtn" id="4" autofocus>',
                              { value: myQuestions[index]["answers"][4]})));
    questionForm.append('<br>');
 });     
  
}


function showResults() {
  var qClass = '';
  // this for loop is getting all the filled values from document question forms and putting into userAnswer array. 
  // if the values are not filled '' will be added.
  for (i=0;i<25;i++){
    var j = i +1;
    qClass = ".qClass" + j + ' ' + 'input:checked';
    userinput = $(qClass).attr('id');
    if (userinput === undefined){
      userAnswer[i] = ' ';
    }
    else{
      userAnswer[i] = userinput;
    }
  }
  // checking the correct answer of all the questions.
  $.each(myQuestions, function (index, value){
    if ((myQuestions[index]["correctAnswer"]) === userAnswer[index-1]){
      wins++;
    }
    else if (userAnswer[index-1]=== ' '){
      unanswered++;
    }
    else{
      loses++;
    }
  })
  
  // // empty the Quiz Body
  var target = $('.quiz-body');
  target.empty();
  // creating a ResultDiv and displaying the results on the screen.
  var resultdiv = $('<div>');
  resultdiv.append('<p class="text-center">'+ 'All Done!' + '</p>');
  resultdiv.append('<p class="text-center">'+ 'Wins : ' + wins + '</p>');
  resultdiv.append('<p class="text-center">'+ 'Losses : '+ loses+ '</p>');
  resultdiv.append('<p class="text-center">'+ 'Unanswered : '+ unanswered+ '</p>');
  target.append(resultdiv);
  // calling the Clear interval.
  stopInterval();
  //Adding play button to the UI after results displayed.
  playBtn();
}

// stopInterval function to clearInterval.
function stopInterval(){
  clearInterval(timeInterval);
  timeInterval = undefined;
  
}
// ==========================================================
function appUI(){
  // Creating needed Panels for the UI.
  createPanel('Javascript-Trivia-Quiz', 'crystalGameDescription','col-sm-12');
  var GameDescription = " Welcome to the Javascript Trivia Quiz. There are 25 Questions and each question has 4 multiple choice to choose your answer. The Quiz is timed and ends when the time is expired.";
  $('.crystalGameDescription').text(GameDescription);
  createPanel('Quiz-Questions', 'quiz-body','col-sm-12');
  playBtn();
}
//function to create a PlayButton.
function playBtn(){
  var playdiv = $('<div class="row text-center">');
  var playButton = $("<button>");
  playButton.addClass('btn btn-primary btn-lg play');
  playButton.text("PLAY");
  $('.quiz-body').append(playdiv);
  playdiv.append(playButton);  
}

function createPanel(headType,bodyType, colType){
  //creating a Panel with three parameters
  //1st parameter : Panel Identification class
  //2nd Parameter : Panel body identification class for updating the values.
  //3rd parameter giving the panel column width.
  var container = $(".container");    
  var column = $("<div class =" + colType + ">");
  var panel = $("<div class='panel panel\-default'>");
  var panelHeader = $("<div class='panel\-heading'>");
  var panelBody = $("<div class='panel\-body'>");
  panelHeader.addClass(headType);
  panelBody.addClass(bodyType);
  panelHeader.addClass('text-center');
  container.append(column);
  column.append(panel);
  panel.append(panelHeader);
  panel.append(panelBody);
  panelHeader.append ("<h3 class='panel\-title'>" + headType + "</h3>");
  panelBody.text ('');
}
//=======================================================================