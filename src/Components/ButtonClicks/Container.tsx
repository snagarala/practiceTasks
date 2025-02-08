import React from "react";
import Compo1 from "./Compo1";
import Compo2 from "./Compo2";
import Compo3 from "./Compo3";

export default function Container() {
  const [clickedComponent, setClickedComponent] = React.useState(0);

  //here Component should start with caps
  const componentArray = [
    { id: 1, name: "Compo1", Component: <Compo1 /> },
    { id: 2, name: "Compo2", Component: <Compo2 /> },
    { id: 3, name: "Compo3", Component: <Compo3 /> },
  ];

  const selectedComponent = componentArray[clickedComponent];

  return (
    <div className="ml-[50px] p-[15px] bg-yellow-100 my-[50px] h-[200px] w-[500px] mb-[15px]">
      <h1 className="text-center font-bold pb-[30px]">Container[ButtonClicks]</h1>
      {componentArray.map(({ name }, index: any) => (
        <button
          key={index}
          onClick={() => setClickedComponent(index)} //update clicked component
          className={`${clickedComponent === index ? "bg-red-400" : "bg-sky-400"}
           rounded p-[5px] mr-[15px] cursor-pointer ml-[20px]`}
        >
          {name}
        </button>
      ))}

      <div className="mt-[40px] flex flex-col items-center">
        {selectedComponent ? (
          selectedComponent.Component //Directly render the react element
        ) : (
          <p>Component not found.</p>
        )}
      </div>
    </div>
  );
}
