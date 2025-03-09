import React, {children, createContext, useState} from 'react';

export const FormContext = createContext();
//FormContext-wrapper component that holds(stores) the state and provides(distributes) it to all child components
//it uses "FormContext.Provider" to pass the props(children)
export  function FormProvider({ children }) {
console.log(children,"props")
     const [ formData,setFormData ] = useState({
        name:"",
        email:"",
        password:"",
        phone:"",
     });
  return (
    <FormContext.Provider value={{ formData,setFormData}}>
     <form>{children}</form>
    </FormContext.Provider>
  );
}
