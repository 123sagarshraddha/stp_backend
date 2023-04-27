import { Icon } from "@iconify/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Badge, Button } from "reactstrap";
import orderdata from '../Json/Orders.json';


export default function Datatable() {
    const router =useRouter()
    const columns = [
        {
            name: "Order_ID",
            selector: "order_id",
            sortable: true,
        },
        {
            name: "Customer_ID",
            selector: "Customer_id",
            sortable: true,
        },
        {
            name: "Patner_ID",
            selector: "Patner_id",
            sortable: true,
        },
        {
            name: "Item_ID",
            selector: "Item_id",
            sortable: true,
        },
        {
            name:"Quantity",
            selector:"Quantity",
            sortable:true
        },
        {
            name:"Order_Date",
            selector:"Order_date",
            sortable:true
        },
        {
            name:"Delivery_Date",
            selector:"Delivery_date",
            sortable:true
        },
        // {
        //     name:"Payment_Status",
        //     selector:"Payment_status",
        //     sortable:true
        // },



        {
            name: <div className="justify-content-center d-flex w-100">Status </div>,
            selector:"Payment_status",
            selector: (row) => (

                <>
                    <Badge className="bg-success fw-400">Status</Badge>
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
                        router.push("//order/add")
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
    //     const response = await axios.get(`http://127.0.0.1:5500/component/Json/Orders.json`);
    //     setData(response.data);
    // };
    useEffect(() => {
        // fetchUsers(1); // fetch page 1 of users
        setData(orderdata);
    }, []);
    return (
        <>

            <div className="dataTable">
                <DataTable
                    title="Orders Table"
                    columns={columns}
                    data={data}
                    pagination
                    highlightOnHover
                />
            </div>

        </>
    );
}
