import Login from "./Login";
import DashBord from "./DashBord";
import React, { useState } from 'react'
import Layout from "../component/layout/Layout";
export default function Home() {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <>
      {isLogin ==="true" ?
        <Layout>
          <DashBord />
        </Layout>
        :
        <Login setIsLogin={setIsLogin} />
      }


    </>


  );
}
