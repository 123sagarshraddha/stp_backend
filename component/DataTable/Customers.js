import { Icon } from "@iconify/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Badge, Button } from "reactstrap";
import customerdata from '../Json/Customers.json'


export default function Datatable() {
    const router =useRouter()
    const columns = [
        {
            name: "Firstname",
            selector: "firstname",
            sortable: true,
        },
        {
            name: "Lastname",
            selector: "lastname",
            sortable: true,
        },
        {
            name:"Email",
            selector:"email",
            sortable:true
        },
       
        {
            name:"Phone_No",
            selector:"phone_no",
            sortable:true
        },
       
        {
            name:"Location",
            selector:"location",
            sortable:true
        },

        {
            name: <div className="justify-content-center d-flex w-100">Status </div>,
            selector: "status",
            style: {
                justifyContent: "center",
            },
            sortable: true,
            minWidth: "200px",
            maxWidth: "200px",
        },
        {
            name: (
                <div className="justify-content-center d-flex fw-600 w-100">Action</div>
            ),
            selector: (row) => (
                <>
                    <Button size="sm" color="primary" className="m-1" onClick={() => {
                        router.push("//customer/add")
                    }}>
                        <Icon
                            icon="material-symbols:edit-outline"
                            width={"18px"}
                            height={"18px"}
                        />
                    </Button>
                    <Button size="sm" color="danger">
                        <Icon icon="ion:trash-outline" width={"18px"} height={"18px"} />
                    </Button>
                </>
            ),
            style: {
                justifyContent: "center",
            },
            minWidth: "180px",
            maxWidth: "180px",
        },
    ];
    const [data, setData] = useState([]);
    // const fetchUsers = async (page) => {
    //     const response = await axios.get(`http://127.0.0.1:5500/component/Json/Customers.json`);
    //     setData(response.data);
    // };
    useEffect(() => {
        setData(customerdata)
        // fetchUsers(1); // fetch page 1 of users
    }, []);
    return (
        <>

            <div className="dataTable">
                <DataTable
                    title="Customer Table"
                
                    columns={columns}
                    data={data}
                    pagination
                    highlightOnHover
                />
            </div>

        </>
    );
}
