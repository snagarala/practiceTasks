import React, {useState} from 'react';
import ControlledAccordion from './ControlledAccordion';

//created a component Questions
function Questions({ values}){
return(
    <div className='flex justify-between w-[80%]'>
        { values.map((val,index)=>{
            return <h2 key={index} >{val}</h2>
        })}
    </div>
);
}

//handling data with different format
export default function ControlledAccordData() {

    const [ currentSelectedIndex,setCurrentSelectedIndex ] = useState(null);

    //isImage:false [ this will come from backend], we gave image in one of the answer & gave normal question
    const [questionsArray, setQuestionsArray] = useState([
        {
          id: 1,
          Question:(
          <Questions
          values={["What planet do we live on?","Which planet is known as the Red Planet?"]} 
          />
          ),
          answer: "We live on Earth, and Mars is the Red Planet.",
          isImage:false,
        },
        {
            id:2,
            Question:(
                <Questions
                values={["What is the capital of France?","Where is the Eiffel Tower located?"]}
                />
                ),
                answer:"Paris",
                isImage:false,
        },
        {
            id:3,
            Question:(
                <Questions
                values={["Which planet is known as the gas giant?"]}
                />
                ),
                answer:"https://howtodrawforkids.com/wp-content/uploads/2022/01/9-jupiter-drawing-cartoon.jpg", 
                isImage:true,
        },
        {
            id:4,
            question:"What is the boiling point of water in Celsius?",
            answer:"100°C.",
            isImage:false,
        },
    ]);
  return (
    <div className="w-full mt-[150px] flex items-center justify-center mb-[50px]">
      <div className={`rounded-xl p-6 flex flex-col ${currentSelectedIndex ? "gap-2" : ""} 
       bg-gray-100 shadow-sm`}>
      {questionsArray.map((questions,index) => {
        return (
        <ControlledAccordion 
          key={questions.id} 
          questions={questions} 
          Question={questions.Question}
          currentSelectedIndex={currentSelectedIndex}
          setCurrentSelectedIndex={setCurrentSelectedIndex}
          index={index}
          />
          )
      })}
      </div>
    </div>
  );
}

