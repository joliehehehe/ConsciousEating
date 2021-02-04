// Countdown page
var countDownDate = new Date("Feb 24, 2021 16:16:16").getTime();

// To update countdown every 1 second
var countdownfunction = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Get difference between now and dedicated date an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // For when countdown timer is over
  if (distance < 0) {
    clearInterval(countdownfunction);
    document.getElementById("demo").innerHTML = "Lottery Expired";
  }
}, 1000);

(function(){
  // Functions
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Variables
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "1. How many calories does 1 serving of a snickers bar have?",
      answers: {
        a: "0",
        b: "215",
        c: "186"
      },
      correctAnswer: "b"
    },
    {
      question: "2. How many grams of ice cream is in 2 reccomended servings?",
      answers: {
        a: "145 grams",
        b: "200 grams",
        c: "132 grams"
      },
      correctAnswer: "c"
    },
    {
      question: "3. placeholder",
      answers: {
        a: "placeholder",
        b: "placeholder",
        c: "placeholder",
      },
      correctAnswer: "a"
    },
    {
      question: "4. placeholder",
      answers: {
        a: "placeholder",
        b: "placeholder",
        c: "placeholder",
      },
      correctAnswer: "a"
    },
    {
      question: "5. placeholder",
      answers: {
        a: "placeholder",
        b: "placeholder",
        c: "placeholder",
      },
      correctAnswer: "a"
    },
    {
      question: "6. placeholder",
      answers: {
        a: "placeholder",
        b: "placeholder",
        c: "placeholder",
      },
      correctAnswer: "a"
    },
    {
      question: "7. placeholder",
      answers: {
        a: "placeholder",
        b: "placeholder",
        c: "placeholder",
      },
      correctAnswer: "a"
    },
    {
      question: "8. placeholder",
      answers: {
        a: "placeholder",
        b: "placeholder",
        c: "placeholder",
      },
      correctAnswer: "a"
    },
    {
      question: "9. placeholder",
      answers: {
        a: "placeholder",
        b: "placeholder",
        c: "placeholder",
      },
      correctAnswer: "a"
    },
    {
      question: "10. placeholder",
      answers: {
        a: "placeholder",
        b: "placeholder",
        c: "placeholder",
      },
      correctAnswer: "a"
    }

  ];

  // Kick things off
  buildQuiz();

  // Pagination
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();