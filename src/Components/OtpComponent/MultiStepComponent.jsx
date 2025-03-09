import React, { useState, useMemo } from "react";
import EntryForm from "./EntryForm";
import OtpForm from "./OtpForm";
import UserDetailsForm from "./UserDetailsForm";

export default function MultiStepComponent() {
  const [userDetails, setUserDetails] = useState({
    userName: "",
    userEmail: "",
    userPhoneNumber: "",
  });
  
  const [currentStep, setCurrentStep] = useState(0);

  const [detailsError, setDetailsError] = useState({
    nameError:"",
    emailError:"",
    phoneError:"",
  });

  //to store otp inputs here it creates 4 empty fields
  const [otpInputs, setOtpInputs] = useState([]);

  const [otpError,setOtpError] = useState("");

  //for otp
  function handleOtpSubmit(inputs, e = null) {
    //console.log(inputs, "inputs");
    if (!validateStep()) { // Stops execution if validation fails just return here
      return;
    }
    if (e) {
      e.currentTarget.blur();//blurs the inputField when otp is submitted
    }
    setCurrentStep(currentStep + 1);
  }

  // Validate Fields
  const validateStep = () => {
    let newErrors = {}; // Stores validation errors

    if (currentStep === 1) {
      if (otpInputs.join("").length === 4) {
        setOtpError("");
        return true;
      } else {
        setOtpError("Please enter a 4-digit OTP.");
        return false;
      }
    }

    if (!userDetails.userName?.trim()) {
      newErrors.nameError = "User Name is required!";
    }
    if (!userDetails.userEmail?.trim()) {
      newErrors.emailError = "Email is required!";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userDetails.userEmail)) {
      newErrors.emailError = "Invalid email format!";
    }
    if (!userDetails.userPhoneNumber?.trim()) {
      newErrors.phoneError = "Phone number is required!";
    } else if (!/^\d{10}$/.test(userDetails.userPhoneNumber)) {
      newErrors.phoneError = "Phone number must be 10 digits!";
    }
    setDetailsError(newErrors);
    return Object.keys(newErrors).length === 0;
      }


  // Handle Next Button Click
  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep(currentStep + 1);
    }
  };

  //  Handle Previous Button Click
  const handlePrevious = () => {
    if (currentStep === 2) {//if currentStep = lastForm then
      setCurrentStep(currentStep - 2);//go to EntryForm
    } else {
    setCurrentStep(currentStep - 1);
    };
  };

  let steps =  useMemo(()=> [
    {
      id: 1,
      component: (
        <EntryForm
          details={userDetails}
          setDetails={setUserDetails}
          errors={detailsError}
        />
      ),
    },
    {
      id: 2,
      component: (
        <OtpForm
          inputNumber={4}
          handleSubmit={handleOtpSubmit}
          otpError={otpError}
          setOtpInputs={setOtpInputs}
        />
      ),
    },
    {
      id: 3,
      component: <UserDetailsForm details={userDetails} />,
    },
  ], [userDetails, otpError, detailsError, otpInputs] //dependency array
  );

  return (
    <div className="h-[600px] w-full flex flex-col gap-1 items-center mt-[150px] ">
      <div
        className="relative w-[550px] h-[550px] border rounded-lg
          bg-gradient-to-r from-cyan-200 to-blue-300"
      >
        { steps[currentStep].component}
        <div>
          <button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className={`absolute bottom-10 left-10 shadow-lg px-6 text-blue-500 font-semibold py-2 rounded
            cursor-pointer bg-white border 
            ${currentStep === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            Previous
          </button>

          <button
            onClick={handleNext}
            disabled={currentStep === steps.length - 1}
            className={`absolute bottom-10 right-10 shadow-lg px-6 text-blue-500 font-semibold py-2 rounded
            cursor-pointer bg-white border
            ${currentStep === steps.length - 1 ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
