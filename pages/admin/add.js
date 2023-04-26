import React, { useState } from 'react';
import Layout from '../../component/layout/Layout';
import { Button, Card, CardBody, Col,  Form, FormGroup, Input, Label, Row} from 'reactstrap';
import { useRouter } from 'next/router';
import Breadcrumbs from '../../component/common/Breadcrumbs';
import AddBreadcrumbs from '../../component/common/AddBreadcrumbs';
import axios from 'axios';

export default function add() {
 
    const router = useRouter();
    const[name,setName]=useState()
    const[email,setEmail]=useState()
    const[phone,setPhone]=useState()
    const [status,setStatus]=useState()
    const[pass,setPass]=useState()

    const handleSubmit=async (e)=>{
        //e.preventDefault();
        let obj={
            username:name,
            email:email,
            phone_no:phone,
            status:status
        }
        console.log("object",obj)
      
        await axios.post(`http://127.0.0.1:5500/component/Json/Admin.json`,JSON.stringify(obj))
        .then(res=>{
            alert("Data post Successfully")
            router.push({ pathname:"/admin" })
        })
        .catch(err => console.log(err))
    
 }
   
   
    return (
        <Layout>
            

            <Breadcrumbs
                name={"Admin"}
                subtitle={"admin"}
            />
            <AddBreadcrumbs
                pathName={"/admin"}
                Name={"Admin"}
                title={"back"}
            />


            <Card>
                <CardBody>
              
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleUsername">
                                        Username
                                    </Label>
                                    <Input
                                        id="exampleUsername"
                                        name="username"
                                        placeholder="username placeholder"
                                        type="username"
                                        onChange={e =>setName(e.target.value)}
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="examplePassword">
                                        Password
                                    </Label>
                                    <Input
                                        id="examplePassword"
                                        name="password"
                                        placeholder="password placeholder"
                                        type="password"
                                        onChange={e =>setPass(e.target.value)}

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
                                        placeholder="with a placeholder"
                                        type="email"
                                        onChange={e =>setEmail(e.target.value)}

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
                                        name="phone_no"
                                        placeholder='with a placeholder'
                                        onChange={e =>setPhone(e.target.value)}


                                    />
                                </FormGroup>
                            </Col>

                        </Row>
                        <FormGroup row>
                            <Label
                                for="exampleSelect"

                            >
                                Select
                            </Label>
                            <Col md={6}>
                                <Input
                                    id="exampleSelect"
                                    name="status"
                                    type="select"
                                    placeholder='Select Status'
                                    onChange={e =>setStatus(e.target.value)}

                                >

                                    <option value={"active"}>
                                        Active
                                    </option>
                                    <option value={"Inactive"}>
                                        Inactive
                                    </option>
                                    <option value={"Delete"}>
                                        Delete
                                    </option>

                                </Input>
                            </Col>
                        </FormGroup>


                        <Button onClick={()=>handleSubmit()} >
                            Submit
                        </Button>
                  
                </CardBody>
            </Card>
           
        </Layout>
    )
}
