import React from "react";

export default function EntryForm({
  details,
  setDetails,
  errors,
}) {
  return (
    <div className="flex flex-col gap-4 mt-[40px] items-center justify-center ">
      <h2 className="text-white font-bold text-[30px] ">
        Personal Information.
      </h2>
      <p className="text-white font-semibold text-center text-[15px]">
        Please enter your information and
        <br /> proceed to next step.
      </p>
      <input
        type="text"
        name="userName"
        value={details.userName}
        className="p-2 rounded border  "
        placeholder="Name"
        onChange={(e) => setDetails({ ...details, userName: e.target.value })}
      />
      {errors.nameError && (
          <span className="text-red-500 text-sm">{errors.nameError}</span>
        )}
      <input
        type="email"
        name="userEmail"
        value={details.userEmail}
        className="p-2 rounded border"
        placeholder="Email"
        onChange={(e) => setDetails({ ...details, userEmail: e.target.value })}
      />
      {errors.emailError && (
          <span className="text-red-500 text-sm">{errors.emailError}</span>
        )}
      <input
        type="number"
        name="userPhoneNumber"
        value={details.userPhoneNumber}
        className="p-2 rounded border"
        placeholder="Phone"
        onChange={(e) => setDetails({ ...details,userPhoneNumber: e.target.value })}
      />
      {errors.phoneError && (
        <span className="text-red-500 text-sm">{errors.phoneError}</span>
      )}
    </div>
  );
}
