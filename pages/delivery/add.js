import React from 'react'
import Layout from '../../component/layout/Layout'
import { Button, Card, CardBody, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { useRouter } from 'next/router'
import AddBreadcrumbs from '../../component/common/AddBreadcrumbs';
import Breadcrumbs from '../../component/common/Breadcrumbs';

export default function add() {
    const router = useRouter();
    return (
        <Layout>
             <Breadcrumbs
                name={"Delivery Partner"}
                subtitle={"delivery partner"}
            />
           <AddBreadcrumbs
        pathName={"/delivery"}
        Name={"Delivery Partner"}
        title={"Back"}
      />
            <Card>
                <CardBody>
                    <Form>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="examplePartner_ID">
                                        Partner_ID
                                    </Label>
                                    <Input
                                        id="examplePartner_ID"
                                        name="Partner_ID"
                                        placeholder="Partner_ID placeholder"
                                        type="Partner_ID"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="examplePartner_Type">
                                        Partner_Type
                                    </Label>
                                    <Input
                                        id="examplePartner_Type"
                                        name="Partner_Type"
                                        placeholder="Partner_Type placeholder"
                                        type="Partner_Type"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleEmail">
                                        Email
                                    </Label>
                                    <Input
                                        id="exampleEmail"
                                        name="email"
                                        placeholder="Email placeholder"
                                        type="email"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="Phone_no">
                                        Phone_No
                                    </Label>
                                    <Input
                                        id="examplePhone_no"
                                        name="Phone_no"
                                        placeholder='Phone_No placeholder'

                                    />
                                </FormGroup>
                            </Col>

                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="examplePassword">
                                        Password
                                    </Label>
                                    <Input
                                        id="examplePassword"
                                        name="password"
                                        placeholder="Password placeholder"
                                        type="password"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleAddress">
                                        Address
                                    </Label>
                                    <Input
                                        id="exampleAddress"
                                        name="Address"
                                        placeholder="Address placeholder"
                                        type="Address"
                                    />
                                </FormGroup>
                            </Col>




                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleBusiness_Name">
                                        Business Name
                                    </Label>
                                    <Input
                                        id="exampleBusiness_Name"
                                        name="Business_Name"
                                        placeholder="Business Name placeholder"
                                        type="Business_Name"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleBusiness_Type">
                                        Business Type
                                    </Label>
                                    <Input
                                        id="exampleBusiness_Type"
                                        name="Business_Type"
                                        placeholder="Business Type placeholder"
                                        type="Business_Type"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleService_Provider">
                                        Service Provider
                                    </Label>
                                    <Input
                                        id="exampleService_Provider"
                                        name="Service_Provider"
                                        placeholder="Service_Provider placeholder"
                                        type="Service_Provider"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup >
                                    <Label
                                        for="exampleSelect"

                                    >
                                        Select
                                    </Label>
                                    <Input
                                        id="exampleSelect"
                                        name="select"
                                        type="select"
                                        placeholder='Select Status'
                                    >
                                        <option>
                                            Select Status
                                        </option>
                                        <option>
                                            Active
                                        </option>
                                        <option>
                                            Inactive
                                        </option>
                                        <option>
                                            Delete
                                        </option>

                                    </Input>
                                </FormGroup>

                            </Col>

                        </Row>
                        <FormGroup>
                            <Col md={6}
                            >
                                <Button>
                                    Submit
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </CardBody>
            </Card>
        </Layout>
    )
}
