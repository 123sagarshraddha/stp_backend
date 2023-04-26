import React, { useEffect, useState } from 'react'
import { Button, Card, CardBody, Col, Form, FormGroup, FormText, Input, Label, Row } from 'reactstrap'
import Layout from '../../component/layout/Layout'
import { DatePicker } from 'reactstrap-date-picker'
import { useRouter } from 'next/router'
import AddBreadcrumbs from '../../component/common/AddBreadcrumbs'
import Breadcrumbs from '../../component/common/Breadcrumbs'


export default function add() {
    const router = useRouter();

    return (
        <Layout>
            <Breadcrumbs
                name={"Order"}
                subtitle={"order"}
            />
            <AddBreadcrumbs
                pathName={"/order"}
                Name={"Order"}
                title={"Back"}
            />
            <Card>
                <CardBody>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleOrder ID">
                                    Order ID
                                </Label>
                                <Input
                                    id="exampleOrder ID"
                                    name="Order ID"
                                    placeholder="Order ID placeholder"
                                    type="Order ID"
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleCustomer_id">
                                    Customer ID
                                </Label>
                                <Input
                                    id="exampleCustomer_id"
                                    name="Customer_id"
                                    placeholder="Customer ID placeholder"
                                    type="Customer_id"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="examplePatner_id">
                                    Patner ID
                                </Label>
                                <Input
                                    id="examplePatner_id"
                                    name="Patner_id"
                                    placeholder="Patner ID placeholder"
                                    type="Patner_id"
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleItem_id">
                                    Item ID
                                </Label>
                                <Input
                                    id="exampleItem_id"
                                    name="Item_id"
                                    placeholder="Item_id placeholder"
                                    type="Item_id"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleQuantity">
                                    Quantity
                                </Label>
                                <Input
                                    id="exampleQuantity"
                                    name="Quantity"
                                    placeholder="Quantity placeholder"
                                    type="Quantity"
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleQuantity">
                                    Quantity
                                </Label>
                                <Input
                                    id="exampleQuantity"
                                    name="Quantity"
                                    placeholder="Quantity placeholder"
                                    type="Quantity"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleorder_date">
                                    Order Date
                                </Label>
                                <DatePicker id="example-datepicker"
                                    name="datepicker"
                                    placeholder="Order Date placeholder"
                                    type="date"

                                ></DatePicker>
                            </FormGroup>
                        </Col>

                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampledelivery_date">
                                    Delivery Date
                                </Label>
                                <DatePicker id="example-datepicker"
                                    name="datepicker"
                                    placeholder="Delivery Date placeholder"
                                    type="date"

                                ></DatePicker>
                            </FormGroup>
                        </Col>

                    </Row>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleOrder_status">
                                    Order Status
                                </Label>
                                <Input
                                    id="exampleOrder_status"
                                    name="Order_status"
                                    placeholder="Order_status placeholder"
                                    type="status"
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="examplePartner_status">
                                    Partner Status
                                </Label>
                                <Input
                                    id="examplePartner_status"
                                    name="Partner_status"
                                    placeholder="Partner_status placeholder"
                                    type="status"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="exampleOrder_status">
                                    Order Status
                                </Label>
                                <Input
                                    id="exampleOrder_status"
                                    name="Order_status"
                                    placeholder="Order_status placeholder"
                                    type="status"
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="examplePartner_status">
                                    Partner Status
                                </Label>
                                <Input
                                    id="examplePartner_status"
                                    name="Partner_status"
                                    placeholder="Partner_status placeholder"
                                    type="status"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="examplePayment_status">
                                    Payment Status
                                </Label>
                                <Input
                                    id="examplePayment_status"
                                    name="Payment_status"
                                    placeholder="Payment_status placeholder"
                                    type="status"
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="examplePayment_method">
                                    Payment Method
                                </Label>
                                <Input
                                    id="examplePayment_method"
                                    name="Payment_method"
                                    placeholder="Payment_method placeholder"
                                    type="status"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
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

                    <Button>
                        Submit
                    </Button>


                </CardBody>
            </Card>
        </Layout>
    )
}
