import React, { useMemo, useReducer } from "react";
import Form from './Form';
import OTPForm from "./OTPForm";
import DetailsDisplay from "./DetailsDisplay";

//all useStates 
const initialState = {
  details: {
    name: "",
    email: "",
    phone: "",
  },
  detailsError: {
    nameError: "",
    emailError: "",
    phoneError: "",
  },
  otp: [],
  otpError: "",
  currentStep: 0,
};
function reducer(state, action) {
  switch (action.type) {
    case "SET_DETAILS":
      return {
        ...state,
        details: action.payload,
      };

    case "SET_DETAILS_ERROR":
      return {
        ...state,
        detailsError: action.payload,
      };
    case "SET_OTP":
      return {
        ...state,
        otp: action.payload,
      };
    case "SET_OTP_ERROR":
      return {
        ...state,
        otpError: action.payload,
      };
    case "SET_CURRENT_STEP":
      return {
        ...state,
        currentStep: action.payload,
      };
    default:
      return state;
  }
}
export default function MultiForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleSubmit(inputs, e = null) {
    if (!isValidate()) {
      return;
    }
    if (e) {
      e.currentTarget.blur();
      // setCurrentStep(currentStep + 1);
    }
    dispatch({
      type: "SET_CURRENT_STEP",
      payload: state.currentStep + 1,
    });
  }

  function isValidate() {
    if (state.currentStep === 1) {
      console.log(state.otp);
      if (state.otp.join("").length === 4) {
        dispatch({
          type: "SET_OTP_ERROR",
          payload: "",
        });
        return true;
      } else {
        console.log(state.otp);
        dispatch({
          type: "SET_OTP_ERROR",
          payload: "please write the otp",
        });
        return false;
      }
    }
    if (
      state.details.name.length &&
      state.details.email.length &&
      state.details.phone.length
    ) {
      
      dispatch({
        type: "SET_DETAILS_ERROR",
        payload: {
          nameError: "",
          emailError: "",
          phoneError: "",
        },
      });
    } else if (!state.details.name.length) {
     
      console.log("name error");
      dispatch({
        type: "SET_DETAILS_ERROR",
        payload: {
          nameError: "please write the name",
        },
      });
    } else if (!state.details.email.length) {
     
      dispatch({
        type: "SET_DETAILS_ERROR",
        payload: {
          emailError: "please write the email",
        },
      });
    } else if (!state.details.phone.length) {
     
      dispatch({
        type: "SET_DETAILS_ERROR",
        payload: {
          phoneError: "please write the phone",
        },
      });
    }
    if (
      state.details.name.length &&
      state.details.email.length &&
      state.details.phone.length
    ) {
      return true;
    }
    return false;
  }

  function next() {
    if (!isValidate()) {
      return;
    }
    dispatch({
      type: "SET_CURRENT_STEP",
      payload: state.currentStep + 1,
    });
  }
  let steps = useMemo(
    () => [
      {
        id: 1,
        component: (
          <Form
            details={state.details}
            setDetails={(payload) => {
              dispatch({ type: "SET_DETAILS", payload });
            }}
            detailsError={state.detailsError}
          />
        ),
      },
      {
        id: 2,
        component: (
          <OTPForm
            inputNumber={4}
            handleSubmit={handleSubmit}
            setOtp={(payload) => {
              dispatch({ type: "SET_OTP", payload });
            }}
            otpError={state.otpError}
          />
        ),
      },
      {
        id: 3,
        component: <DetailsDisplay details={state.details} />,
      },
    ],
    [state.details, state.otpError, state.detailsError, state.otp]
  );
  return (
    <div className="h-[600px] w-full flex flex-col gap-1 items-center mt-[150px] ">
      <div
        className="relative w-[550px] h-[550px] border rounded-lg
          bg-gradient-to-r from-cyan-200 to-blue-300"
      >
        {steps[state.currentStep].component}
        <div className="flex gap-4">
          <button
            disabled={state.currentStep === 0}
            onClick={() => {
              if (state.currentStep === 2) {
                dispatch({
                  type: "SET_CURRENT_STEP",
                  payload: state.currentStep - 2,
                });
              } else {
                dispatch({
                  type: "SET_CURRENT_STEP",
                  payload: state.currentStep - 1,
                });
              }
            }}
            className={`absolute bottom-10 left-10 shadow-lg px-6 text-blue-500 font-semibold py-2 rounded
            cursor-pointer bg-white border 
            ${state.currentStep === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            Previous
          </button>
          <button
            disabled={state.currentStep === steps.length - 1}
            onClick={next}
            className={`absolute bottom-10 right-10 shadow-lg px-6 text-blue-500 font-semibold py-2 rounded
            cursor-pointer bg-white border
            ${state.currentStep === steps.length - 1 ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
