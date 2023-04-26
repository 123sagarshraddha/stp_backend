import React from 'react'
import { Button, Card, CardBody, Col, Form, FormGroup, FormText, Input, Label, Row } from 'reactstrap'
import Layout from '../../component/layout/Layout'
import { useRouter } from 'next/router'
import AddBreadcrumbs from '../../component/common/AddBreadcrumbs';
import Breadcrumbs from '../../component/common/Breadcrumbs';
// import { useReducer } from 'react';
// import Success from './success';


// const formReducer=(state,event)=>{
//     return{
//         ...state,
//         [event.target.name]:event.target.value
//     }
// }

export default function add() {
    const router = useRouter();

    // const[formData,setFormData]=useReducer(formReducer,{})

    // const handleSubmit=(e)=>{
    //     e.preventDefault();
    //     if(Object.keys(formData).length==0)return console.log("Don't have Form Data")
    //     console.log(formData)

    // }

    // if(Object.keys(formData).length>0)return <Success message={"data added"}></Success>
  
    return (
        <Layout>
            <Breadcrumbs
                name={"Customer"}
                subtitle={"customer"}
            />
            <AddBreadcrumbs
                pathName={"/customer"}
                Name={"Customer"}
                title={"back"}
            />
            <Card>
                <CardBody>
                    <Form >
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleFirstname">
                                        Firstname
                                    </Label>
                                    <Input
                                        id="exampleFirstname"
                                        name="firstname"
                                        placeholder="Firstname placeholder"
                                        type="firstname"
                                      
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleLastname">
                                        Lastname
                                    </Label>
                                    <Input
                                        id="exampleLastname"
                                        name="lastname"
                                        placeholder="Lastname placeholder"
                                        type="lastname"
                                      
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
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleCountrycode">
                                        Country Code
                                    </Label>
                                    <Input
                                        id="exampleCountrycode"
                                        name="Countrycode"
                                        placeholder="Countrycode placeholder"
                                        type="Countrycode"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleVerifiction_code_email">
                                        Verifiction code email
                                    </Label>
                                    <Input
                                        id="exampleVerifiction_code_email"
                                        name="Verifiction_code_email"
                                        placeholder="Verifiction_code_email placeholder"
                                        type="Verifiction_code_email"
                                      
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
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
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleLocation">
                                        Location
                                    </Label>
                                    <Input
                                        id="exampleLocation"
                                        name="Location"
                                        placeholder="Location placeholder"
                                        type="Location"
                                      
                                    />
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
