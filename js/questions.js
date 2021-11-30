let questionIndex = 0;
let userAnswers = [];

const questions = [
   {
      // 1.
      question: 'The words "Life, Liberty, and the pursuit of Happiness" are in what founding document?',
      answers: ["Declaration of Independence", "Bill of Rights", "The Constitution", "Federalist papers"],
      correct: 0
   },
   {
      // 2.
      question: "How many U.S. senators are there?",
      answers: ["50", "100", "150", "200"],
      correct: 1
   },
   {
      // 3.
      question: "How many voting members are in the House of Representatives?",
      answers: ["420", "100", "435", "196"],
      correct: 2
   },
   {
      // 4.
      question: "How many senators does each state have?",
      answers: ["2", "5", "10", "Varies state to state"],
      correct: 0
   },
   {
      // 5. 
      question: "How long is a term for a member of the House of Representatives?",
      answers: ["2", "4", "6", "8"],
      correct: 0
   },
   {
      // 6.
      question: "Who appoints federal judges?",
      answers: ["Supreme court", "Cabinet members", "The President", "Secretary of State"],
      correct: 2
   },
   {
      // 7.
      question: "The President of the United States is elected for how many years?",
      answers: ["2", "4", "6", "8"],
      correct: 1
   },
   {
      // 8.
      question: "Who signs bills to become laws?",
      answers: ["Congress", "The President", "House of Representatives", "The Supreme Court"],
      correct: 1
   },
   {
      // 9.
      question: "How many seats are on the Supreme Court?",
      answers: ["5", "7", "9", "15"],
      correct: 2
   },
   {
      // 10.
      question: "Who vetoes bills?",
      answers: ["The President", "Congress", "The Senate", "The Vice President"],
      correct: 0
   },
   {
      // 11.
      question: "How many Supreme Court justices are usually needed to decide a case?",
      answers: ["5", "9", "11", "15"],
      correct: 0
   },
   {
      // 12.
      question: "When was the Declaration of Independence adopted?",
      answers: ["July 4, 1775", "July 4, 1776", "November 11, 1776", "June 21, 1788"],
      correct: 1
   },
   {
      // 13.
      question: "Who was president during the Great Depression and World War II?",
      answers: ["Richard Nixon", "Theodore Roosevelt", "Harry Truman", "Franklin Roosevelt"],
      correct: 3
   },
   {
      // 14.
      question: "What is the highest court in the United States?",
      answers: ["Courts of Appeals", "Supreme Court", "Federal District Courts", "Court of Federal Claims"],
      correct: 1
   },
   {
      // 15.
      question: "Who is Commander in Chief of the U.S. military?",
      answers: ["The President", "Congress", "The Senate", "The Vice President"],
      correct: 0
   },
   {
      // 16.
      question: "How many amendments does the U.S. Constitution have?",
      answers: ["22", "27", "42", "88"],
      correct: 1
   },
   {
      // 17.
      question: "Who does a U.S. senator represent?",
      answers: ["Citizens from a congressional district", "Citizens from a state", "Citizens of the US", "Citizens from a city"],
      correct: 1
   },
   {
      // 18.
      question: "Who elects members of the House of Representatives?",
      answers: ["Citizens from a congressional district", "Citizens from a state", "Citizens of the US", "Citizens from a city"],
      correct: 0
   },
   {
      // 19.
      question: "The President of the United States is in charge of which branch of government?",
      answers: ["The Executive Branch", "The Judicial Branch", "The Legislative Branch", "The Representative Branch"],
      correct: 0
   },
   {
      // 20.
      question: "Some states have more representatives than other states. Why?",
      answers: ["The states are wealthier", "The states have more people", "The states have more land", "None of the above"],
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
   userAnswers.push($('#answers-container > [type="radio"]:checked').val())

   questionIndex++;
   setupQuestion();
}

function setupQuestion() {

   if (questionIndex >= questions.length) {
      finishQuiz();
      return;
   }

   let question = questions[questionIndex];
   $('#question-text').text((questionIndex + 1) + '. ' + question.question);
   $('#answers-container').empty();

   for (let i = 0; i < question.answers.length; i++) {
      $('#answers-container').append('<input id="answer' + i + '" type="radio" name="answer" value="' + i + '">');
      $('#answers-container').append('<label style="margin-left: 1rem; font-size: 20px;" for="answer' + i + '" class="lead">' + question.answers[i] + '</label><br>');
   }
}

$(document).ready(function () {
   setupQuestion();
})
