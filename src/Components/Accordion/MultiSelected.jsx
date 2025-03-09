import React from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export default function MultiSelected({
  questions,
  selectedIndex1,
  setSelectedIndex1,
  index,
}) {
  return (
    <div className="wrapper w-[600px] p-4 rounded-md bg-white border-b border-gray-200">
      <div
        onClick={() => {
          if (selectedIndex1?.includes(questions.id)) {
            // Remove the id from the array (deselect)
            setSelectedIndex1(
              selectedIndex1?.filter((id) => id !== questions.id)
            );
          } else {
           // console.log(questions.id,"clicked")
            setSelectedIndex1([...selectedIndex1, questions.id]); //spread & add new value
          }
        }}
        className="question flex justify-between cursor-pointer "
      >
        <h2 className="font-sans">{questions.question}</h2>
        <button>
          {selectedIndex1?.includes(questions.id) ? (
            <MdKeyboardArrowUp size={25} className="text-gray-500" />
          ) : (
            <MdKeyboardArrowDown size={25} className="text-gray-500" />
          )}
        </button>
      </div>
      {/* for multiple fields to select */}
      {questions.answer && selectedIndex1?.includes(questions.id) && (
        <div
          className={`answer ${selectedIndex1?.includes(questions.id) ? "" : "hidden"}
               transition-all duration-300 p-2`}
        >
          <p className="font-light text-sm">{questions.answer}</p>
        </div>
      )}
    </div>
  );
}
