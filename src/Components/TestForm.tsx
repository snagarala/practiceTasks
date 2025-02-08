import React, { useState } from "react";

export default function TestForm() {
  const questionsArray = [
    {
      questionNumber: 1,
      question: "What is the correct way to declare a JavaScript variable?",
      options: ["var myVar", "let = myVar", "variable myVar", "const: myVar"],
      correctAnswer: "var myVar",
    },
    {
      questionNumber: 2,
      question:
        "Which function is used to serialize an object into a JSON string?",
      options: ["stringify()", "parse()", "convert", "serialize()"],
      correctAnswer: "stringify()",
    },
    {
      questionNumber: 3,
      question: "What will be the output of console.log(typeof NaN);?",
      options: ["undefined", "number", "NaN", "object"],
      correctAnswer: "number",
    },
    {
      questionNumber: 4,
      question: "Which of the following is NOT a JavaScript data type?",
      options: ["Number", "Boolean", "Character", "Object"],
      correctAnswer: "Character",
    },
    {
      questionNumber: 5,
      question: "What will console.log(3 || 5); return?",
      options: ["true", "false", "3", "5"],
      correctAnswer: "3",
    },
    {
      questionNumber: 6,
      question: "What will console.log([] == false); return?",
      options: ["true", "false", "undefined", "TypeError"],
      correctAnswer: "true",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
    setIsSubmitted(false);
  };

  const handleSubmit = () => {
    if (selectedOption === questionsArray[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setIsSubmitted(true);
  };

  const handleNext = () => {
    if (!isSubmitted) return; // Prevent skipping without answering
    setSelectedOption(null);
    setIsSubmitted(false);

    if (currentQuestion === questionsArray.length - 1) {
      setQuizCompleted(true); // Show score when all questions are answered
    } else {
      setCurrentQuestion((prev) => (prev + 1) % questionsArray.length);
    }
  };

  return (
    <div className="h-screen">
      <div className="h-[760px] w-[800px] bg-gradient-to-r from-cyan-500 to-blue-500 ... m-[40px]  flex flex-col items-center py-[20px] ">
        <h1 className="text-xl font-bold text-white">Test Form</h1>
        <div className="h-[560px] w-[600px] bg-slate-100 rounded p-[40px] mt-[40px] relative ">
          {quizCompleted ? (
            //Show final score after completing all questions
            <div>
              <h2 className="text-2xl font-bold">Quiz Completed!</h2>
              <p className="text-xl mt-4">
                Your Score: {score} / {questionsArray.length}
              </p>
              <button
                onClick={() => window.location.reload()} // Restart quiz
                className="rounded-md bg-blue-500 px-[20px] py-[10px] text-white font-bold mt-[20px] cursor-pointer"
              >
                Restart Quiz
              </button>
            </div>
          ) : (
            <>
              <p className="font-bold ">Questions</p>
              <h2 className="font-extrabold text-blue-500">
                {questionsArray[currentQuestion].questionNumber}
                <span>/{questionsArray.length}</span>
              </h2>
              <p className="font-extrabold  ">
                {questionsArray[currentQuestion].question}
              </p>
              <hr className="border-b border-gray-600 my-2"></hr>
              <div className="mt-8">
                {/* Radio Button */}

                {questionsArray[currentQuestion].options.map(
                  (option, index) => (
                    <div className="options flex">
                      <input
                        type="radio"
                        name="quiz-option"
                        value={option}
                        checked={selectedOption === option}
                        onChange={() => handleOptionClick(option)}
                        className="form-radio mt-5 mr-2 p-4 h-5 w-5 text-blue-600"
                      />
                      <button
                        key={index}
                        onClick={() => handleOptionClick(option)}
                        className={`text-start rounded-lg py-[8px] pl-[15px] my-[10px] w-full border cursor-pointer 
                ${selectedOption === option ? "bg-blue-400 text-white" : "bg-white"} 
                `}
                      >
                        {/* Option Text */}
                        <span>{option}</span>
                      </button>
                    </div>
                  )
                )}
              </div>
              {/* Submit Button */}
              {!isSubmitted && (
                <button
                  onClick={handleSubmit}
                  disabled={!selectedOption}
                  className="rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 ... 
               px-[20px] py-[5px] text-white font-bold mt-[40px] ml-5 cursor-pointer"
                >
                  Submit
                </button>
              )}
              {/* Show "Next" only after Submission */}
              {isSubmitted && (
                <button
                  onClick={handleNext}
                  className="rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 ... 
                px-[20px] py-[5px] text-white font-bold mt-[40px] ml-5 cursor-pointer absolute right-0 mr-[40px]"
                >
                  Next
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
