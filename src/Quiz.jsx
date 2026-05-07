import { useState } from "react";
import  "./Quiz.css"

const questions = [
    {
      question: "What color do you get when you mix red and blue?",
      option: ["Green", "Purple", "Orange", "Yellow"],
      answer: "Purple"
    },

    {
      question: "Which animal is known as 'King of the Jungle'?",
      option: ["Elephant", "Tiger", "Lion", "Gorilla"],
      answer: "Lion"
    },

    {
      question: "What device is used to take photographs?",
      option: ["Microphone", "Camera", "Speaker", "Printer"],
      answer: "Camera"
    },

    {
      question: "What do bees produce?",
      option: ["Honey", "Milk", "Silk", "Wax"],
      answer: "Honey"
    },

    {
      question: "Which day comes after friday?",
      option: ["Monday", "Thursday", "Wednesday", "Saturday"],
      answer: "Saturday"
    }
  ];


function Quiz () {

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const currentQ = questions[currentQuestion];
  const [score, setScore] = useState(0);
  const [showResult , setShowResult] = useState(false);

  function handleAnswer(selectedOption) {
    console.log(selectedOption)
   if (selectedOption === currentQ.answer){
    setScore(score + 1)
   }

   if (currentQuestion === questions.length - 1){
    setShowResult(true)
   }else{
    setCurrentQuestion(currentQuestion + 1)
   }

  };

  return(
    <div className="quiz-container">
      {showResult ? 
       <div className="quiz-result">
        <h1 className="result">Quiz Complete!</h1>
        <p className="result-text">You got {score} out of {questions.length} questions.</p>
        <button className="restart-btn" onClick={ () => (
          setCurrentQuestion(0),
          setScore(0),
          setShowResult(false))
        }
        >Restart</button>
       </div>: 

       <div className="quiz-box">
        <p className="question-info">Question {currentQuestion + 1} 0f {questions.length}</p>
        <h1 className="question">{currentQ.question}</h1>
        
        {currentQ.option.map((option, index) => (
          <button key={index}  className="option-btn" onClick={() => handleAnswer(option)}>{option}</button>
        ))}

      <p className="score-text">Score : {score} </p>
      </div>
      } 
     
    </div>
  );
}
export default Quiz;
