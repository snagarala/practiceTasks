import React, { useState, useEffect, useRef } from "react";

export default function OtpForm({
  inputNumber = 4,
  handleSubmit,
  otpError,
  setOtpInputs,
}) {
  //to store 4 inputValues for "otp" i.e,creating [emptyArray] of 4 values
  //new Array().fill() = creating array with empty values(initialValue) as empty
  //if we keep input type=number fill should not be empty so we gave null
  const [inputs, setInputs] = useState(new Array(parseInt(inputNumber)).fill(null));
  
  const inputRefs = useRef([]);

  useEffect(() => {
    inputRefs.current[0].focus(); // Auto-focus on first field
  }, []);

  useEffect(() => {
    setOtpInputs(inputs); // Sync OTP state with inputs
  }, [inputs]);
  
  return (
    <div className="w-[550px] h-[550px] bg-blue-950 flex rounded  justify-center">
      <div className="flex flex-col gap-4 items-center mt-[60px]">
        <h2 className="font-semibold text-white text-2xl">
          Enter Verification Code
        </h2>
        <p className="text-white font-light text-center">
          We just texted the code to <br />
          your phone number
        </p>

        <div className="flex gap-4 mt-[30px]">
          {inputs.map((input, index) => (
            <input
              ref={(element) => (inputRefs.current[index] = element)}
              key={index}
              type="number"
              value={inputs[index] || ""} //Reference inputs, not input
              min={0}
              max={9}
              onChange={(e) => {
                if (inputs[index]) {
                  //in input if already number is there return
                  return;
                }
                setInputs((prev) => {
                  const newInputs = [...prev]; //created a new array-newInputs storing value init & updating to setInputs
                  newInputs[index] = e.target.value; //similar to setInputs[...inputs,e.target.value]
                  return newInputs;
                });
                if (e.target.value && index < inputNumber - 1) {
                  //if(user enter the value && index should be < than(4-1=3))
                  inputRefs.current[index + 1].focus(); //shifting focus to next input
                }
              }}
              onKeyDown={(e) => {
                if (e.key === "Backspace") {
                  if (!inputs[index]) {
                    inputRefs.current[index - 1].focus();
                  }
                  if (inputs[index]) {
                    setInputs((prev) => {
                      const newInputs = [...prev];
                      newInputs[index] = null;
                      return newInputs;
                    });
                  }
                }
              }}
              className="rounded p-1 w-[55px] h-[55px] bg-blue-900 font-bold text-2xl
                text-white border border-slate-100 text-center"
            />
          ))}
        </div>
        {otpError && (
          <p className="text-red-500 text-sm">{otpError}</p>
        )}
        <button
          onClick={(e) => {
            handleSubmit(inputs,e);
            inputRefs.current.forEach((ref) => ref?.blur()); // Blur inputs on submit 
          }}
          className="bg-orange-400 mt-2 cursor-pointer rounded-full w-full text-white font-semibold p-2"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
