import React from "react";
import useLocalStorageState from "./customHooks/useLocalStorageState.js";

export default function UserEntryForm() {

  //key-formData ,defaultValue-{obj-with "values"}
  const [userDetails, setUserDetails] = useLocalStorageState("userDetails", {
    name: "",
    address: "",
    email: "",
    phoneNumber: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.removeItem("userDetails");//once submitted removing from localStorage
    setUserDetails({ name: "", address: "", email: "", phoneNumber: "" });
  };

  return (
    <div className="w-[800px] h-900px bg-blue-200 my-[20px] p-[20px] ml-[50px]">
      <form
        id="survey-form"
        className="bg-cyan-200 rounded-[1rem] p-[20px]"
        onSubmit={handleSubmit}
      >
        <h1
          className="text-center font-bold mb-[15px] text-3xl font-serif"
          id="title"
        >
          Application Form{" "}
        </h1>
        <p className="mb-[10px]" id="description">
          <b>Note:</b>Please fill all fields.
        </p>
        <fieldset className="border-2 border-cyan-600 p-[10px] mb-[1rem]">
          <legend className="text-xl ">
            <b>Personal Details</b>
          </legend>
          <div className="">
            <div>
              <label for="name">Name: </label>
              <input
                type="text"
                placeholder="Enter your Name"
                name={"name"}
                value={userDetails.name}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, name: e.target.value })
                }
                className="p-[5px] border rounded"
              />
            </div>
            <br />
            <div>
              <label for="address">Address: </label>
              <input
                type="text"
                placeholder="Enter address here"
                name={"address"}
                value={userDetails.address}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, address: e.target.value })
                }
                className="p-[5px] border rounded"
              />
            </div>
            <br />
            <div>
              <label for="email">Email: </label>
              <input
                type="email"
                placeholder="Enter email here"
                name={"email"}
                value={userDetails.email}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, email: e.target.value })
                }
                className="p-[5px] border rounded"
              />
            </div>
            <br />
            <div>
              <label for="phoneNumber">Phone Number: </label>
              <input
                type="number"
                placeholder="Enter 10 digit number"
                name={"phoneNumber"}
                value={userDetails.phoneNumber}
                onChange={(e) =>
                  setUserDetails({ ...userDetails, phoneNumber: e.target.value })
                }
                className="p-[5px] border rounded"
              />
            </div>
            <br />
          </div>
        </fieldset>
        <div id="submitButton" className="place-items-center">
          <button
            type="submit"
            id="submit"
            onClick={handleSubmit}
            className="ml-[10px] border bg-blue-500 p-[10px] cursor-pointer rounded "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
