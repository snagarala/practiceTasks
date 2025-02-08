import React from "react";
import Compo1 from "./Compo1";
import Compo2 from "./Compo2";
import Compo3 from "./Compo3";

//here by default no button is active user has to click to select
export default function Container1() {
  const [clickedComponent, setClickedComponent] = React.useState(null);

  const componentArray = [
    { id: 0, title: "Compo1", Component: <Compo1 /> },
    { id: 1, title: "Compo2", Component: <Compo2 /> },
    { id: 2, title: "Compo3", Component: <Compo3 /> },
  ];

  const selectedComponent = componentArray.find(
    (item) => item.id === clickedComponent
  );

  return (
    <div className="ml-[50px] p-[15px] bg-yellow-100 my-[50px] h-[200px] w-[500px] mb-[15px] ">
       <h1 className="text-center font-bold pb-[30px]">Container1[ButtonClicks]</h1>
      {componentArray.map(({ title }, index: any) => (
        <button
          key={index}
          onClick={() => setClickedComponent(index)} //update clicked component
          className={`${clickedComponent === index ? "bg-red-400" : "bg-sky-400"}
           rounded p-[5px] mr-[15px] cursor-pointer ml-[20px] `}
        >
          {title}
        </button>
      ))}

      <div>
        {clickedComponent !== null ? (
          <div className="mt-[40px] flex flex-col items-center">
            {selectedComponent ? (
              selectedComponent.Component //Directly render the react element
            ) : (
              <p>Component not found.</p>
            )}
          </div>
        ) : (
          <p className="font-bold mt-[40px] flex flex-col items-center">
            Please click on a button.
          </p>
        )}
      </div>
    </div>
  );
}
