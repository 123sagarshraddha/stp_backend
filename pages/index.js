import Login from "./Login";
import DashBord from "./DashBord";
import React, { useState } from 'react'
import Layout from "../component/layout/Layout";
import Admin from '../component/DataTable/Admin';
import Customer from '../component/DataTable/Customers';
import DataTable from "../component/DataTable/DataTable";
export default function Home() {
  const [isLogin, setIsLogin] = useState(false)
  return (
    <>
      {isLogin === "true" ?
        <Layout>
          <DashBord />
          <DataTable />
          <Customer />
        </Layout>
        :
        <Login setIsLogin={setIsLogin} />
      }
      <div className="App my-2">
        <Admin />

      </div>


    </>


  );
}
