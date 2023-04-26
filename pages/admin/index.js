import Layout from "../../component/layout/Layout";
import Admin from "../../component/DataTable/Admin"
import React from 'react'
import { useRouter } from "next/router";
import AddBreadcrumbs from "../../component/common/AddBreadcrumbs";
import Breadcrumbs from "../../component/common/Breadcrumbs";
export default function index() {
  const router = useRouter();
  return (
    
    <Layout>
      <Breadcrumbs
        name={"Admin"}
        subtitle={"admin"}
      />

      <AddBreadcrumbs
        pathName={"/admin/add"}
        Name={"Admin"}
        title={"Add Deatails"}
      />
     
       
         <Admin/>
      

    </Layout>
    
  )
}
