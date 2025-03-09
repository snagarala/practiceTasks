import React, { useState, useRef, useEffect } from "react";

export default function OTPForm({
  inputNumber = 4,
  handleSubmit,
  setOtp,
  otpError,
}) {
  console.log("rendering");
  const [inputs, setInputs] = useState(
    new Array(parseInt(inputNumber)).fill(null)
  );
  const inputRefs = useRef([]);
  useEffect(() => {
    inputRefs.current[0].focus();
  }, []);

  useEffect(() => {
    setOtp(inputs);
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
              ref={(el) => (inputRefs.current[index] = el)}
              className="rounded p-1 w-[55px] h-[55px] bg-blue-900 font-bold text-2xl
              text-white border border-slate-100 text-center"
              key={index}
              type="number"
              min={0}
              max={9}
              value={input || ""}
              onChange={(e) => {
                if (inputs[index]) {
                  console.log("input already filled");
                  return;
                }
                setInputs((prev) => {
                  const newInputs = [...prev];
                  newInputs[index] = e.target.value;
                  return newInputs;
                });
            
                if (e.target.value && index < inputNumber - 1) {
                  inputRefs.current[index + 1].focus();
                }
              }}
              onKeyDown={(e) => {
                console.log("e.key", e.key);
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
            />
          ))}
        </div>
        {otpError && <p className="text-red-500 text-sm">{otpError}</p>}
        <button
          onClick={() => {
            handleSubmit(inputs);
          }}
          className="bg-orange-400 mt-2 cursor-pointer rounded-full w-full text-white font-semibold p-2"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
