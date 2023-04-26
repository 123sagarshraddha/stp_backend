import Layout from "../../component/layout/Layout"
import React from 'react'
import Customers from '../../component/DataTable/Customers'

import AddBreadcrumbs from "../../component/common/AddBreadcrumbs"
import Breadcrumbs from "../../component/common/Breadcrumbs"
export default function index() {
  return (
    <>
      <Layout>
        <Breadcrumbs
          name={"Customer"}
          subtitle={"customer"}
        />
        <AddBreadcrumbs
          pathName={"/customer/add"}
          Name={"Customer"}
          title={"Add Details"}
        />
        <Customers />
      </Layout>
    </>


  )
}
