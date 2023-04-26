import React from 'react'
import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col, Row } from 'reactstrap'

export default function Breadcrumbs( props) {
    return (
        <>
            <div className='row'>
                <div className='col-12'>
                    <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                        <h4 className='mb-sm-0'>{props.name}</h4>
                     <div className='page-title-right'>
                     <Breadcrumb className='breadcrumb mb-o'>
                            <BreadcrumbItem>
                               
                                    Home
                              
                            </BreadcrumbItem>
                            <BreadcrumbItem active>
                               { props.subtitle}
                            </BreadcrumbItem>
                        </Breadcrumb>
                     </div>
                        
                    </div>
                </div>
            </div>




        </>


    )
}
