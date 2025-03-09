import React, { useState } from "react";
import BasicAccordion from "./BasicAccordion";
import MultiSelected from "./MultiSelected";

export default function AccordData() {
  const [questionsArray, setQuestionsArray] = useState([
    {
      id: 1,
      question: "What is a variable ? ",
      answer: "A container for storing data.",
    },
    {
      id: 2,
      question: "What is debugging ?",
      answer: "Finding and fixing code errors.",
    },
    {
      id: 3,
      question: "What is an API ?",
      answer: "A way for applications to communicate.",
    },
    {
      id: 4,
      question: "What is useEffect in React?",
      answer: "A hook for handling side effects.",
    },
  ]);

  //if i want to select one question
  const [currentSelectedIndex, setCurrentSelectedIndex] = useState(null);

  //if i want to select multiple questions
  const [selectedIndex1, setSelectedIndex1] = useState([]);

  return (
    <div className="w-full mt-[80px] flex flex-col gap-6 items-center justify-center">
      <div
        className={`rounded-xl p-6 flex flex-col ${currentSelectedIndex ? "gap-2" : ""} 
       bg-gray-100 shadow-sm`}
      >
        {questionsArray.map((questions, index) => {
          return (
            <BasicAccordion
              key={questions.id}
              questions={questions}
              currentSelectedIndex={currentSelectedIndex}
              setCurrentSelectedIndex={setCurrentSelectedIndex}
              index={index}
            />
          );
        })}
      </div>

      <div
        className={`rounded-xl p-6 flex flex-col ${selectedIndex1 ? "gap-2" : ""} 
       bg-gray-100 shadow-sm`}
      >
        {questionsArray.map((questions, index) => {
          return (
            <MultiSelected
              key={questions.id}
              questions={questions}
              selectedIndex1={selectedIndex1}
              setSelectedIndex1={setSelectedIndex1}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
}
