import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Overview from './components/Overview';
// import Indices from './components/Indices';
// import Bonds from './components/Bonds';
// import About from './components/About';
// import SignInPageIndices from './components/SignInPageIndices';
//import ParentComponent from './components/ParentComponent';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  //   {
  //     path: "/",
  //     element:<ParentComponent/>,
  //     children:[
  //       {
  //         path:"overview",
  //         element:<Overview/>
  //       },
  //       {
  //        path: "indices",
  //        element:<Indices/>,
  //       },
  //       {
  //         path: "bonds",
  //         element:<Bonds/>,
  //        },
  //        {
  //         path: "about",
  //         element:<About/>,
  //        },
  //      ],
  //   },
  //   {
  //     path: "/signIn",
  //     element:<SignInPageIndices/>,
  //   },
  //   {
  //     path: "/signIn2",
  //     element:<SignInPageIndices/>,
  //   }
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App /> */}
      {/* <ParentComponent/> */}
      <RouterProvider router={router} />
      {/* <FirstPage/> */}
    </Provider>
  </React.StrictMode>
);
//const router = creatBrowserRouter([
//   {
//     path:"/",
//     element:<App/>
//   }
// ]);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
