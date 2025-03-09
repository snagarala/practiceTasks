import React, {useState} from 'react'

//Custom Hooks
//works for Form's with multiple Fields (no need to create useState & handleChange fun's if i use this hook)
//T-genericType (if user sends/gives string/number to initialValue it will work)
export default function useFormHookState<T>(initialValue: T) {
  const [values, setValues] = useState(initialValue);


  //if T-obj with {name:string,age:number} Keyof T only that keys inside obj
  function handleChange(key: keyof T, value: string | number) {
    setValues((prev) => {
      return { ...prev, [key]: value };
    });
  }

  return {
    values,
    handleChange,
  };
}
