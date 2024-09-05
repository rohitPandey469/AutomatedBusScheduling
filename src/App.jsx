import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login/Login";
// import { Outlet } from 'react-router-dom'

const App = () => {
  // const [isLoading, setIsLoading] = useState(true);
  // return (
  //   <div>App</div>
  // )

  return (
    <>
      {/* <Navbar /> */}
      <Login />
    </>
  );
};

export default App;
