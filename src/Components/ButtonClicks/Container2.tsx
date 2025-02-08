import React from "react";
import Compo1 from "./Compo1";
import Compo2 from "./Compo2";
import Compo3 from "./Compo3";

//here we imported 3 components & took here in array "Component:Compo1" C-must be capital
const componentArray = [
  { id: 0, title: "Compo1", Component: Compo1 },
  { id: 1, title: "Compo2", Component: Compo2 },
  { id: 2, title: "Compo3", Component: Compo3 },
];

export default function Container2() {
  const [clickedComponent, setClickedComponent] = React.useState(0);

  //when you clicked on clickedComponent we get a compo1/compo2/compo3 that component i am storing in 'SelectedComponent'
  //To identify that variable we gave 1st letter as caps(SelectedComponent).here,clickedComponent=index
  //if you want to render one component we have to keep that in between tags(< />) it will render
  const SelectedComponent = componentArray[clickedComponent].Component;

  return (
    <div className="ml-[50px] p-[15px] bg-yellow-100 my-[50px] h-[200px] w-[500px] mb-[15px]">
      {componentArray.map(({ title }, index: any) => (
        <button
          key={index}
          onClick={() => setClickedComponent(index)} //update clickedComponent useState
          className={`${clickedComponent === index ? "bg-red-400" : "bg-sky-400"}
           rounded p-[5px] mr-[15px] cursor-pointer ml-[20px]`}
        >
          {title}
        </button>
      ))}

      <SelectedComponent />
    </div>
  );
}
