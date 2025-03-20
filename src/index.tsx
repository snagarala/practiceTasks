import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { createBrowserRouter, RouterProvider, BrowserRouter } from "react-router-dom";
import WrapperComponent from "./Components/HOC/WrapperComponent1";
// import Overview from './components/Overview';
// import Indices from './components/Indices';
// import Bonds from './components/Bonds';
// import About from './components/About';
// import SignInPageIndices from './components/SignInPageIndices';
//import ParentComponent from './components/ParentComponent';
import Login from "./Components/HOC/Login";
import WrapperComponent1 from "./Components/HOC/WrapperComponent1";
import { AuthProvider } from "./Components/HOC/AuthContext.js";
import UnAuthorized from "./Components/HOC/UnAuthorized";
import FoodHomePage from "./Components/FoodDeliveryApp/FoodHomePage";
import FoodAboutPage from "./Components/FoodDeliveryApp/FoodAboutPage";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const router = createBrowserRouter([
  {
    path: "/",
    element:<AuthProvider><App /></AuthProvider> ,
  },
  {
    path: "/dashboard",
    element: <WrapperComponent1 />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path:"/unauthorized",
    element: <UnAuthorized/>
  },
  {
    path:"/foodHome",
    element:<FoodHomePage/>
  },
  {
    path:"/foodAbout",
    element:<FoodAboutPage/>
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
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <BrowserRouter> {/* ✅ Use only BrowserRouter */}
//         <AuthProvider>
//           <App /> {/* ✅ App should handle routes using `react-router-dom` */}
//         </AuthProvider>
//       </BrowserRouter>
//     </Provider>
//   </React.StrictMode>
// );

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
