import { Icon } from "@iconify/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Badge, Button } from "reactstrap";
import vehicledata from '../Json/Vehicle.json';


export default function Vehicle() {
    const router =useRouter()
    const columns = [
        {
            name: "Vehicle_id",
            selector: "Vehicle_id",
            sortable: true,
        },
        {
            name: "Vehicle_name",
            selector: "Vehicle_name",
            sortable: true,
        },
        {
            name:"Vehicle_type",
            selector:"Vehicle_type",
            sortable:true
        },
       
        {
            name:"Vehicle_number",
            selector:"Vehicle_number",
            sortable:true
        },
      

        {
            name: <div className="justify-content-center d-flex w-100">Status </div>,
            selector: (row) => (
                <>
                    <Badge className="bg-success fw-400">status</Badge>
                </>
            ),
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
                        router.push("//vehicle/add")
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
    //     const response = await axios.get(`http://127.0.0.1:5500/component/Json/Vehicle.json`);
    //     setData(response.data);
    // };
    useEffect(() => {
        // fetchUsers(1); // fetch page 1 of users
        setData(vehicledata);
    }, []);
    return (
        <>

            <div className="dataTable">
                <DataTable
                    title="Vehicle Table"
                    columns={columns}
                    data={data}
                    pagination
                    highlightOnHover
                />
            </div>

        </>
    );
}
