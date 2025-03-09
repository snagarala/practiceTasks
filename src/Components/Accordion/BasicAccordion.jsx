import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

//questions = {obj}
export default function BasicAccordion({
  questions,
  currentSelectedIndex,
  setCurrentSelectedIndex,
  index,
}) {
  return (
      <div className="wrapper w-[600px] p-4 rounded-md bg-white border-b border-gray-200">
        <div
          onClick={() => {
            if (currentSelectedIndex === questions.id) { //close-open
              setCurrentSelectedIndex(null);
            } else {
              setCurrentSelectedIndex(questions.id);
            }
          }}
          className="question flex justify-between cursor-pointer "
        >
          <h2 className="font-sans">{questions.question}</h2>
          <button>
            {currentSelectedIndex === questions.id ? (
              <MdKeyboardArrowUp size={25} className="text-gray-500"/>
            ) : (
              <MdKeyboardArrowDown size={25} className="text-gray-500"/>
            )}
          </button>
        </div>
        {questions.answer && (
          <div
            className={`answer ${currentSelectedIndex === questions.id ? "" : "hidden"}
             transition-all duration-300 p-2`}
          >
            <p className="font-light text-sm">{questions.answer}</p>
          </div>
        )}
      </div>
  );
}
