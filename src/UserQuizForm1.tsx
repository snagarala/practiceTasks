import { useState } from "react";

const questionsArray = [
  {
    questionNumber: 1,
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    questionNumber: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Mars",
  },
  {
    questionNumber: 3,
    question: "self-awareness includes knowing about my ...",
    options: ["strengths", "weakness", "Hobbies", "all of the above"],
    correctAnswer: "all of the above",
  },
];

export default function UserQuizForm1() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
    setIsSubmitted(false);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const handleNext = () => {
    if (!isSubmitted) return; // Prevent skipping without answering
    setSelectedOption(null);
    setIsSubmitted(false);
    setCurrentQuestion((prev) => (prev + 1) % questionsArray.length);
  };

  return (
    <div className="h-[600px] w-[800px] bg-gradient-to-r from-cyan-500 to-blue-500 ... m-[40px]  flex flex-col items-center py-[20px] ">
      <h1 className="text-xl font-bold text-white">
        Choose the Correct Answer.
      </h1>
      <div className="h-[450px] w-[600px] bg-slate-100 rounded p-[40px] mt-[40px] ">
        <h2 className="font-extrabold text-blue-500">
          {questionsArray[currentQuestion].questionNumber}
        </h2>
        <p className="font-extrabold ">{questionsArray[currentQuestion].question}</p>
        <div className="mt-4">
          {questionsArray[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              className={`rounded-lg py-[8px] pl-[15px] my-[10px] w-full border cursor-pointer
                ${selectedOption === option ? "bg-blue-400 text-white" : "bg-white"} 
                ${isSubmitted && option === questionsArray[currentQuestion].correctAnswer ? "bg-green-500" : ""}
                ${
                  isSubmitted &&
                  selectedOption === option &&
                  option !== questionsArray[currentQuestion].correctAnswer
                    ? "bg-red-500"
                    : ""
                }`}
            >
              {option}
            </button>
          ))}
        </div>
        {/* Show Correction Feedback */}
        {isSubmitted && (
          <p className="mt-2 font-semibold">
            {selectedOption ===
            questionsArray[currentQuestion].correctAnswer ? (
              <span className="text-green-600">✅ Correct!</span>
            ) : (
              <span className="text-red-500">
                ❌ Incorrect! The correct answer is:{" "}
                {questionsArray[currentQuestion].correctAnswer}
              </span>
            )}
          </p>
        )}

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={!selectedOption}
          className="rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 ... 
        px-[20px] py-[5px] text-white font-bold mt-[20px] cursor-pointer"
        >
          Submit
        </button>
        {/* Show "Next" only after Submission */}
        {isSubmitted && (
          <button
            onClick={handleNext}
            className="rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 ... 
          px-[20px] py-[5px] text-white font-bold mt-[20px] ml-[10px] cursor-pointer"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}
