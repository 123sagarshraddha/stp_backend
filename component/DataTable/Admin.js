import { Icon } from "@iconify/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Badge, Button } from "reactstrap";
import admindata from '../Json/Admin.json'


export default function Datatable() {
    const router = useRouter();
    // console.log("data",admindata)

      const columns = [
        {
            name: "id",
            selector: "id",
            sortable: true,
        },
        {
            name: "Username",
            selector: row => row.username,
            sortable: true,
        },
        {
            name: "Email",
            selector: row => row.email,
            sortable: true
        },

        {
            name: "Phone_No",
            selector: "phone_no",
            sortable: true
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
                        router.push("//admin/add")
                    }}>
                        <Icon
                            icon="material-symbols:edit-outline"
                            width={"18px"}
                            height={"18px"}
                        />
                    </Button>
                    <Button size="sm" color="danger" className="m-1">


                    <Icon
                        icon="ion:trash-outline"
                        width={"18px"}
                        height={"18px"}
                    />
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
    //  const fetchUsers = async (page) => {
    //  const response = await axios.get(`http://127.0.0.1:5500/component/Json/Admin.json`);
    //  setData(response.data);
    //  };
    useEffect(() => {
        // axios.get('http://127.0.0.1:5500/component/Json/Admin.json')
        //     .then(res => setData(res.data))
        //     .catch(err => console.log(err))
        // fetchUsers(1)
        setData(admindata)
    }, []);
    return (
        <>

            <div className="dataTable">
                <DataTable 
                  title="Admin"
                  columns={columns}
                  data={data}
                  pagination
                  highlightOnHover
                   
                >
                    
                </DataTable>
   </div>

        </>
    );
}
