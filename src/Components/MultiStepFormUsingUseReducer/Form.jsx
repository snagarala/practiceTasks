import React from 'react';

export default function Form({ details, setDetails, detailsError }) {
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
        placeholder="Name"
        value={details.name}
        className="p-2 rounded border"
        onChange={(e) => setDetails({ ...details, name: e.target.value })}
      />
      {detailsError.nameError && (
        <p className="text-red-500 text-sm">{detailsError.nameError}</p>
      )}
      <input
        type="email"
        placeholder="Email"
        value={details.email}
        className="p-2 rounded border"
        onChange={(e) => setDetails({ ...details, email: e.target.value })}
      />
      {detailsError.emailError && (
        <p className="text-red-500 text-sm">{detailsError.emailError}</p>
      )}
      <input
        type="tel"
        placeholder="Phone"
        value={details.phone}
        className="p-2 rounded border"
        onChange={(e) => setDetails({ ...details, phone: e.target.value })}
      />
      {detailsError.phoneError && (
        <p className="text-red-500 text-sm">{detailsError.phoneError}</p>
      )}
    </div>
  )
}
