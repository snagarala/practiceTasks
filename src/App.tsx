import React from "react";
// import CounterComponent from './Components/CounterComponent';
// import SearchingTheProduct from "./Components/SearchingTheProduct";
// import Container from "./Components/ButtonClicks/Container";
// import Container1 from "./Components/ButtonClicks/Container1";
// import Container2 from "./Components/ButtonClicks/Container2";
// import UserQuizForm from "./Components/UserQuizForm";
import UserQuizForm1 from "./Components/UserQuizForm1";
// import FilterableProductTable from "./Components/FilterableProductTable";
// import FilterableProductTable1 from './Components/FilterableProductTable1';
import TestForm from "./Components/TestForm";

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <CounterComponent/>
      <SearchingTheProduct/>
      <Container />
      <Container1 />
      <Container2 />
      <UserQuizForm /> */}
      <UserQuizForm1 />
      <TestForm/>
      {/* <FilterableProductTable />
      <FilterableProductTable1/> */}
    </div>
  );
};

export default App;
