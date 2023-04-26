import React from 'react';
import Layout from '../../component/layout/Layout';
import Vehicle from '../../component/DataTable/Vehicle';
import { useRouter } from 'next/router';
import AddBreadcrumbs from '../../component/common/AddBreadcrumbs';
import Breadcrumbs from '../../component/common/Breadcrumbs';

export default function index() {
  const router = useRouter();
  return (
    <Layout>
       <Breadcrumbs
                name={"Vehicle"}
                subtitle={"vehicle"}
            />
       <AddBreadcrumbs
          pathName={"/vehicle/add"}
          Name={"Vehicle"}
          title={"Add Details"}
        />
      <Vehicle />
    </Layout>
  )
}
