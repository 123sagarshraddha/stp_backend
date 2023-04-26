import React from 'react'
import Layout from '../../component/layout/Layout'
import { Button, Card, CardBody, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { Col } from 'antd'
import { useRouter } from 'next/router'
import AddBreadcrumbs from '../../component/common/AddBreadcrumbs'
import Breadcrumbs from '../../component/common/Breadcrumbs'

export default function add() {
    const router = useRouter();
    return (
        <Layout>
            <Breadcrumbs
                name={"Vehicle"}
                subtitle={"vehicle"}
            />
            <AddBreadcrumbs
                pathName={"/vehicle"}
                Name={"Vehicle"}
                title={"Back"}
            />
            <Card>
                <CardBody>
                    <Form>
                        <Row>
                            <Col md={9}>
                                <FormGroup>
                                    <Label for="exampleVehicle ID">
                                        Vehicle ID
                                    </Label>
                                    <Input
                                        id="exampleVehicle_id"
                                        name="Vehicle_id"
                                        placeholder="Vehicle ID placeholder"
                                        type="ID"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={9}>
                                <FormGroup>
                                    <Label for="exampleVehicle_name">
                                        Vehicle Name
                                    </Label>
                                    <Input
                                        id="exampleVehicle_name"
                                        name="Vehicle_name"
                                        placeholder="Vehicle_name placeholder"
                                        type="Name"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            < Col md={9}>
                                <FormGroup>
                                    <Label for="exampleVehicle_Number">
                                        Vehicle Number
                                    </Label>
                                    <Input
                                        id="exampleVehicle_Number"
                                        name="Vehicle_number"
                                        placeholder="Vehicle_Number placeholder"
                                        type="text"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={9}>
                                <FormGroup >
                                    <Label
                                        for="exampleVehicle_Type"

                                    >
                                        Vehicle Type
                                    </Label>
                                    <Input
                                        id="exampleVehicle_type"
                                        name="select"
                                        type="select"
                                        placeholder='Select Vehicle_TYpe'
                                    >
                                        <option>
                                            Select Vehicle Type
                                        </option>
                                        <option>
                                            Two Wheeler
                                        </option>
                                        <option>
                                            Three Wheeler
                                        </option>
                                        <option>
                                            Four Wheeler
                                        </option>

                                    </Input>
                                </FormGroup>

                            </Col>

                        </Row>
                        <Col md={9}>
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

                    </Form>
                    <Button>
                        Submit
                    </Button>
                </CardBody>
            </Card>

        </Layout>
    )
}
