import React from 'react'
import Layout from '../../component/layout/Layout'
import Orders from '../../component/DataTable/Orders'
import { useRouter } from 'next/router'
import { Button, Col, Row } from 'reactstrap';
import AddBreadcrumbs from '../../component/common/AddBreadcrumbs';
import Breadcrumbs from '../../component/common/Breadcrumbs';
export default function index() {
  const router = useRouter();
  return (
    <Layout>
      <Breadcrumbs
        name={"Order"}
        subtitle={"order"}
      />
      <AddBreadcrumbs
        pathName={"/order/add"}
        Name={"Order"}
        title={"Add Details"}
      />

      <Orders />
    </Layout>
  )
}
