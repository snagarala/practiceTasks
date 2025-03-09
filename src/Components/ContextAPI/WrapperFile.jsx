import React from "react";
import { FormProvider } from "./ParentFormProvider";
import ChildInputComponent from "./ChildInputComponent";

export default function WrapperFile() {
  //wrapper - FormProvider
  //here "<input/>" - multiple Components
  return (
    <div className="h-[200px] w-full bg-red-100 p-4 ">
      <div className="flex flex-col gap-4">
      <FormProvider className="flex flex-col gap-4">
        <ChildInputComponent name="name" type="text" placeholder="Name" /><br/>
        <ChildInputComponent name="email" type="email" placeholder="Email" /><br/>
        <ChildInputComponent
          name="password"
          type="password"
          placeholder="Password"
        /><br/>
        <ChildInputComponent
          name="phone"
          type="number"
          placeholder="PhoneNumber"
        />
      </FormProvider>
    </div>
    </div>
  );
}
