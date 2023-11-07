const questions = [
    {
      questionTitle: "Inside which HTML element do we put the JavaScript?",
      options: ["<script>", "<scripting>", "<js>", "<javascript>"],
      keyAnswer: "<script>",
    },
    {
      questionTitle: "Where is the correct place to insert a JavaScript?",
      options: ["Both the <head> section and the <body> section are correct ", "The <body> section", "The <head> sectio "],
      keyAnswer: "Both the <head> section and the <body> section are correct ",
    },
    {
      questionTitle: "How do you call a function named 'myFunction'?",
      options: ["call myFunction()", "call function myFunction()", "myFunction()"],
      keyAnswer: "myFunction()",
    },
    {
      questionTitle: "How to write an IF statement in JavaScript?",
      options: ["if (i == 5)", "if i = 5 then", "if i = 5", "if i == 5 then"],
      keyAnswer: "if (i == 5)",
    },

    {
        questionTitle: "True OR False : JavaScript is the same as Java." ,
        options:[""],
        keyAnswer: "False",
      },
      {
        questionTitle: "Yes OR No : Is JavaScript case-sensitive?",
        options:[""],
        keyAnswer: "Yes",
      },
];
  
  const qustionsCont = document.getElementById("qustions-cont");
  const qustionsText = document.getElementById("qustions-text");
  const options = document.getElementById("options");
  const timeLeft = document.getElementById("time-left");
  const resultCont = document.getElementById("result-cont");
  const resultText = document.getElementById("result-text");
  
  let currentIndex = 0;
  let score = 0;
  let timer = 10;
  let countDown;
  

  function showQuestion(index) {
    const questin = questions[index];
    qustionsText.innerText = questin.questionTitle;
    options.innerHTML = "";
    questin.options.forEach((option) => {
        if (option == ""){
            const input = document.createElement("input");
            input.textContent = option;
            options.appendChild(input);
            input.addEventListener("keypress",function (x) {
                if (x.key === "Enter") {
                    checkAnswer(input.value , questin.keyAnswer,"input");
                }  
            });

        }else {
           const b = document.createElement("button");
            b.textContent = option;
            options.appendChild(b);
  
            b.addEventListener("click", () => {
           checkAnswer(option, questin.keyAnswer , "button");
           });
      // options.insertAdjacentHTML("afterbegin", `<button>${option}</button>`);
    }
    });
}
  
  function showTimer() {
    countDown = setInterval(function () {
      timer--;
      timeLeft.textContent = timer;
      if (timer <= 0) {
        clearInterval(countDown);
        checkAnswer("", null);
      }
    }, 1000);
  }
  
  showQuestion(currentIndex);
  showTimer();


  function checkAnswer(myAnswer, correctAnswer , type) {
    currentIndex++;
    clearInterval(countDown);

    if (myAnswer === correctAnswer && type === "input") {
        score++;
      }
    if (myAnswer === correctAnswer && type === "button") {
      score++;
    }
  
    if (currentIndex < questions.length) {
      showQuestion(currentIndex);
      timer = 10;
      timeLeft.textContent = timer;
      showTimer();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    qustionsCont.style.display = "none";
    resultCont.style.display = "flex";
    resultText.textContent = `Your Score is ${score} of ${questions.length}`;
  }




