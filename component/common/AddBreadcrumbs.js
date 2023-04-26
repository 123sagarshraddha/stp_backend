import { Button, Col, Row } from "reactstrap"

import { useRouter } from 'next/router'
import React from 'react'

export default function AddBreadcrumbs(props) {
    const router=useRouter();
    return (
        <>
            <Row>
                <Col>
                    <h5>{props.Name}</h5>
                </Col>
                <Col md="auto" style={{ marginBottom: "10px" }}>
                    <Button className="float-end rounded-0 fw-500 btn btn-primary btn-sm" onClick={() => { router.push(props.pathName) }}>{props.title}

                    </Button>
                </Col>
            </Row>
        </>
    )
}
