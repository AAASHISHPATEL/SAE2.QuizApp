const quizData = [
    {
      question: "Q1: What does SAE stand for?",
      options: [
        "a: Self Automotive Engineering",
        "b: Self Automatic Engineering",
        "c: Society of Automotive Engineers",
        "d: Society of Automatic Engineers",
      ],
      correct: 2,
    },
    {
      question: "Q2: Which club is allowed in Aarohan?",
      options: ["a: ISTE", "b: DC", "c: RN", "d: SAE"],
      correct: 3,
    },
    {
      question: "Q3: How many clubs are allowed in Aarohan?",
      options: ["a: 1", "b: 5", "c: 3", "d: 7"],
      correct: 1,
    },
    {
      question: "Q4: What is Aarohan?",
      options: [
        "a: Tech fest",
        "b: Ceremony Party",
        "c: Farewll Party",
        "d: None of these",
      ],
      correct: 0,
    },
    {
      question: "Q5: SAE is related to?",
      options: ["a: Self Driving Cars", "b: Coding", "c: Mathematics", "d: NGO"],
      correct: 0,
    },
    {
      question: "Q6: Who is presedent of SAEINDIA NITDGP?",
      options: [
        "a: Ashish Patel",
        "b: Rahul Kashyap",
        "c: Kushal Sarda",
        "d: Sujal Gupta",
      ],
      correct: 1,
    },
    {
      question: "Q7: Who is WEBD Head of SAEINDIA NITDGP?",
      options: [
        "a: Ashish Patel",
        "b: Rahul Kashyap",
        "c: Sujal Gupta",
        "d: Asif Khan",
      ],
      correct: 2,
    },
    {
      question: "Q8: Who is vice presedent of SAEINDIA NITDGP?",
      options: [
        "a: D. Sharvani Reddy",
        "b: Rahul Kashyap",
        "c: Ashish Patel",
        "d: Sujal Gupta",
      ],
      correct: 0,
    },
    {
      question: "Q9: Gautam Sir is?",
      options: [
        "a: Junior Coordinator",
        "b: WEBD Head",
        "c: Senior Coordinator",
        "d: President",
      ],
      correct: 2,
    },
    {
      question: "Q10: Which club organized TEDx this year?",
      options: ["a: CCA", "b: SAEINDEA", "c: Recursion", "d: MNTC"],
      correct: 1,
    },
  ];
  
  const quizcontainer=document.querySelector(".quiz-container");
  const answerElm = document.querySelectorAll(".answer");
  const questionElm =document.querySelector("#question");
  const option_1=document.querySelectorAll("#option_1");
  const option_2=document.querySelectorAll("#option_2");
  const option_3=document.querySelectorAll("#option_3");
  const option_4=document.querySelectorAll("#option_4");
  const start=document.querySelector("#startButton");
  const about=document.querySelector(".about")
  const tire1=document.querySelector(".tire1");
  const tire2=document.querySelector(".tire2");
  const submitBtn = document.querySelector("#submit");
  const nextBtn=document.querySelector("#Next");
  const home=document.querySelector(".home");
    let currentQuiz =0;
    let score=0;
    let correctans=null;
    
    const loadQuiz = () => {
      const {question, options,correct}=quizData[currentQuiz];
       questionElm.innerText=question;
       options.forEach(
          (curoption, index) => (window[`option_${index + 1}`].innerText=curoption)
          );
          correctans=correct;
    };
  
  const disableOption = () => {
      answerElm.forEach((curElem)=> curElem.checked =false);
  };
  
    const getSelectedOption = () => {
      let answerElement = Array.from(answerElm);
      return answerElement.findIndex((curElem) => curElem.checked); 
    };
  
    start.addEventListener("click", () => {
      tire2.classList.remove('shrink');
      tire2.classList.add('expand');
      
      setTimeout(()=>{
        quizcontainer.classList.remove('remove');
      },500);
      loadQuiz();
    });
  
    nextBtn.addEventListener("click", () => {
      let selectedOptionIndex = getSelectedOption();
  
      if(selectedOptionIndex==correctans){
          score++;
      }
      if(currentQuiz<quizData.length-1){
          disableOption();
          currentQuiz++;
          loadQuiz();
      }
      else{
  
      }
      // console.log("score=",score);
      // currentQuiz++;
  
    });
  
    submitBtn.addEventListener("click", () => {
      selectedOptionIndex = getSelectedOption();
      if(selectedOptionIndex==correctans){
        score++;
    }
  
      about.innerHTML=`<div class="notSpin"><h3>Your Score:</h3>
      <h2 >${score}/${quizData.length}</h2></div>`;
      home.classList.remove('home');
      
      quizcontainer.classList.add('remove');
      tire2.classList.add('shrink');
      tire2.classList.remove('expand');
      // tires.classList.remove('tireNone');
      // quizcontainer.classList.add('quizremove');
      
    currentQuiz=0;
    score=0;
    });

    home.addEventListener("click", ()=>{
      about.innerHTML=`<h3>About Quiz</h3>
      <p>This Quiz is related to SAEINDIA. It's perpose is to spread awairness about SAEINDIA Club of NITDGP amoung students. In this Quiz, 
       there will Questions SAE, Aarohan, members and their post.In this There will be total 10 Questions and all has four options.</p>`;

       home.classList.add('home');
    });