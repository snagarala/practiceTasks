import React from 'react';
// import CounterComponent from './CounterComponent';
// import FetchStoreRedux from './FetchStoreRedux';
// import Container from './Container';
// import Container1 from './Container1';
import UserQuizForm from './UserQuizForm';
import UserQuizForm1 from './UserQuizForm1';
import FilterableProductTable from './FilterableProductTable';
//import FilterableProductTable1 from './FilterableProductTable1';

const App: React.FC = ()=> {
  return (
    <div className="App">
      {/* <CounterComponent/>
      <FetchStoreRedux/>
      <Container/>
      <Container1/> */}
      <UserQuizForm/>
      <UserQuizForm1/>
      <FilterableProductTable/>
      {/* <FilterableProductTable1/> */}
    </div>
  );
}

export default App;
