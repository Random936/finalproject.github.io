let questionIndex = 0;
let userAnswers = [];

const questions = [
   {
      question: 'The words "Life, Liberty, and the pursuit of Happiness" are in what founding document?',
      answers: ["Declaration of Independence", "Bill of Rights", "The constitution", "Federalist papers"],
      correct: 0
   },
   {
      question: "How many U.S. senators are there?",
      answers: ["100", "150", "50", "169"],
      correct: 0
   },
   {
      question: "How long is a term for a U.S. senator?",
      answers: ["4", "8", "6", "2"],
      correct: 2
   },
   {
      question: "How many senators does each state have?",
      answers: ["2", "5", "Varies state to state", "10"],
      correct: 0
   },
   {
      question: "How long is a term for a member of the House of Representatives?",
      answers: ["4", "8", "6", "2"],
      correct: 3
   },
   {
      question: "Who appoints federal judges?",
      answers: ["Supreme court", "Cabinet members", "The President", "Secretary of State"],
      correct: 2
   },
   {
      question: "How long is a term for a member of the House of Representatives?",
      answers: ["4", "8", "6", "2"],
      correct: 2
   },
   {
      question: "Who signs bills to become laws?",
      answers: ["Congress", "The President", "House of Representatives", "The Supreme Court"],
      correct: 1
   },
   {
      question: "How many seats are on the Supreme Court?",
      answers: ["5", "15", "9", "7"],
      correct: 2
   },
   {
      question: "How many Supreme Court justices are usually needed to decide a case?",
      answers: ["5", "9", "11", "15"],
      correct: 0
   },
   {
      question: "When was the Declaration of Independence adopted?",
      answers: ["July 4, 1776", "November 15, 1777", "July 4, 1775", "June 21, 1788"],
      correct: 0
   },
   {
      question: "Who was president during the Great Depression and World War II?",
      answers: ["Richard Nixon", "Theodore Roosevelt", "Harry Truman", "Franklin Roosevelt"],
      correct: 3
   },
   {
      question: "What is the highest court in the United States?",
      answers: ["Courts of Appeals", "Supreme Court", "Federal District Courts", "Court of Federal Claims"],
      correct: 1
   },
   {
      question: "Who is Commander in Chief of the U.S. military?",
      answers: ["The President", "Congress", "The Senate", "The Vice President"],
      correct: 0
   },
   {
      question: "Which amendment states the President of the United States can serve only two terms?",
      answers: ["42", "51", "89", "22"],
      correct: 3
   },
   {
      question: "Who does a U.S. senator represent?",
      answers: ["Citizens from a congressional district", "Citizens from a state", "Citizens of the US", "Citizens from a city"],
      correct: 1
   },
   {
      question: "Who elects members of the House of Representatives?",
      answers: ["Citizens from a congressional district", "Citizens from a state", "Citizens of the US", "Citizens from a city"],
      correct: 0
   },
   {
      question: "The President of the United States is in charge of which branch of government?",
      answers: ["The Executive Branch", "The Judicial Branch", "The Legislative Branch", "The Representative Branch"],
      correct: 0
   },
   
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
