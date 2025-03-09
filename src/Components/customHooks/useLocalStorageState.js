import { useState, useEffect,useRef } from "react";

export default function useLocalStorageState(key,defaultValue) {

  const [value, setValue] = useState(() => { 
    return JSON.parse(localStorage.getItem(key)) || defaultValue;
  });//checking if that item/key is there if there get that item

  //when user click on submit button even localStorage get clear/empty
  //we used useRef - when user have option to select "keyName"(i.e,key-dynamic)
  
  const prevValueRef = useRef();

  useEffect(() => { 
   if (prevValueRef.current !== key){
    localStorage.removeItem(prevValueRef.current);
   }
    prevValueRef.current = key;
    localStorage.setItem(key,JSON.stringify(value));//we setting that item/key in LocalStorage
  }, [value,key]);//we are getting the key & setting that in the value

  return [value,setValue];
}
  // const [ name,setName ] = useState("");
  // useEffect(()=>{
  //     if(localStorage.getItem("name") && name === ""){
  //         if(name === ""){
  //             return setName("name");
  //         }
  //         return setName(localStorage.getItem("name"));
  //     }
  //     localStorage.setItem("name",name);
  // },[name]);

  
