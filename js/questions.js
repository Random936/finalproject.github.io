let questionIndex = 0;
let userAnswers = [];

const questions = [
   {
      question: "Whats 1+1?",
      answers: ["-1", "your mom", "2"],
      correct: 2
   },
   {
      question: "What is an orange fruit?",
      answers: ["apple", "orange", "not this one", "blueberry"],
      correct: 1
   }
]

function finishQuiz() {
   window.location = 'results.html?grade=' + gradeAnswers();
}

function gradeAnswers() {

   let correct = 0;
   for (let i = 0; i < questions.length; i++) {
      if (questions[i].correct == userAnswers[i]) {
         correct++;
      }
   }

   console.log(correct / questions.length);
   return correct / questions.length;
}

function submitQuestion() {
   userAnswers.push($('#answers-container > * > [type="radio"]:checked').val())

   questionIndex++;
   setupQuestion();
}

function setupQuestion() {

   if (questionIndex >= questions.length) {
      finishQuiz();
      return;
   }

   let question = questions[questionIndex];
   $('#question-text').text(question.question);
   $('#answers-container').empty();

   for (let i = 0; i < question.answers.length; i++) {
      $('#answers-container').append('<label><input type="radio" name="answer" value="' + i + '">' + question.answers[i] + '</label><br>');
   }
}

$(document).ready(function () {
   setupQuestion();
})
