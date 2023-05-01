import Login from "./Login";
import DashBord from "./DashBord";
import React, { useState } from 'react';
// import '../styles/globals.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Home() {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <>

      {isLogin === "true" ?
        <>
          <DashBord />

        </>
        :
        <Login setIsLogin={setIsLogin} />
      }



    </>


  );
}
