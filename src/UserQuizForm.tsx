import React from "react";

export default function UserQuizForm() {
  const [clickedIndex, setClickedIndex] = React.useState<number | null>(null);
  const [clickedSubmit, setClickedSubmit] = React.useState<boolean>(false);

  const inputArray = [
    { id: 0, text: "stringify()", isCorrect: true },
    { id: 1, text: "parse()" },
    { id: 2, text: "convert()" },
    { id: 3, text: "none of the above" },
  ];

  const handleInputClick = (index: number) => {
    setClickedIndex(index);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (clickedIndex !== null) {
      if (inputArray[clickedIndex]?.isCorrect) {
        alert("Your answer is correct !");
      } else {
        alert("Your answer is not correct. Please check it !");
      }
      setClickedSubmit(true);
    } else {
      alert("Please select an answer before submitting!");
    }
  };

  return (
    <div className="h-[600px] w-[800px] bg-gradient-to-r from-cyan-500 to-blue-500 ... m-[40px]  flex flex-col items-center py-[20px] ">
      <b>Choose Correct Answer and submit.</b>
      <form
        onSubmit={handleFormSubmit}
        className="h-[450px] w-[600px] bg-slate-100 rounded p-[40px] mt-[40px] relative"
      >
        <h1 className="font-extrabold text-blue-500">01</h1>
        <label className="font-semibold">
          Which function is used to serialize an object into a JSON string in
          JavaScript ?
        </label>
        <br />
        {inputArray.map((item, index) => (
          <div>
            <input
              key={item.id}
              type="text"
              value={item.text}
              onClick={() => handleInputClick(index)}
              readOnly
              className={`rounded-lg py-[8px] pl-[15px] my-[10px] w-full border cursor-pointer 
              ${clickedIndex === index ? "bg-blue-500 text-white" : "bg-white"}
              ${clickedIndex === index && clickedSubmit && item.isCorrect ? "bg-lime-500 text-black" : ""}
                          `}
            />
          </div>
        ))}
        <input
          type="submit"
          value="Next"
          className="rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 ... 
               px-[20px] py-[5px] text-white font-bold mt-[20px] absolute right-0 mr-[40px] cursor-pointer"
        />
      </form>
    </div>
  );
}
