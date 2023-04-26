import React from 'react';
import Layout from '../../component/layout/Layout';
import DeliveryPartner from "../../component/DataTable/DeliveryPartner"
import { useRouter } from 'next/router';
import { Button, Col, Row } from 'reactstrap';
import AddBreadcrumbs from '../../component/common/AddBreadcrumbs';
import Breadcrumbs from '../../component/common/Breadcrumbs';

export default function index() {
  const router = useRouter();
  return (
    <Layout>
      <Breadcrumbs
        name={"Delivery Partner"}
        subtitle={"delivery partner"}
      />
      <AddBreadcrumbs
        pathName={"/delivery/add"}
        Name={"Delivery Partner"}
        title={"Add Details"}
      />

      <DeliveryPartner />
    </Layout>
  )
}
