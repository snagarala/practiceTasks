import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from './Redux/counterSlice.js';

export default function CounterComponent() {
  const count = useSelector((state: any) => state.counter.value); // Get the current count
  const dispatch = useDispatch();

  const [step, setStep] = React.useState<number>(1);
  
    function stepResetFunc() {
      dispatch(reset());
      setStep(1);
    }

  return (
    <div className="ml-[50px] p-[15px] bg-yellow-100 my-[50px] h-[200px] w-[500px] items-center">
      <h1 className="text-center mt-[5px] bg-red-300 mb-[50px] p-[5px]">
        Counter: {count}
      </h1>
      <div className="m-[15px]">
        <label>step value: </label>
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
          //e.target.value is string but in step we have number 
          //so we are converting into number and giving it to setStep
          className="border p-[5px] "
        />
      </div>
      <button
        className="bg-sky-400 rounded p-[5px] mr-[15px] cursor-pointer ml-[20px]"
        onClick={() => dispatch(increment(step))}
      >
        Increment
      </button>
      <button
        className="bg-sky-400 rounded p-[5px] mr-[15px] cursor-pointer"
        onClick={() => dispatch(decrement(step))}
      >
        Decrement
      </button>
      <button
        className="bg-sky-400 rounded p-[5px] mr-[15px] cursor-pointer"
        onClick={stepResetFunc}
        // onClick={() => {
        //   setStep(1);
        //   dispatch(reset());
        // }}
      >
        Reset
      </button>
    </div>
  );
}
