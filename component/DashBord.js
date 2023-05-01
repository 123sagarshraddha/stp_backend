
import { Icon } from "@iconify/react";
import Link from "next/link";
import { Card, CardBody } from "reactstrap";
import {
    ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, Tooltip, BarChart, Bar, AreaChart, Area,
    Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis
} from "recharts";

const pdata = [
    {
        name: "Ahmedabad",
        orders: "26",
        Quantity: "50",
    },
    {
        name: "Himmatnagar",
        orders: "34",
        Quantity: "70"
    },
    {
        name: "Idar",
        orders: "80",
        Quantity: "26"
    },
    {
        name: "Baroda",
        orders: "20",
        Quantity: "78"
    },
    {
        name: "Modasa",
        orders: "36",
        Quantity: "45"
    },
    {
        name: "Gandhinagar",
        orders: "60",
        Quantity: "90"
    },
    {
        name: "Chiloda",
        orders: "89",
        Quantity: "29"
    }
];



export default function DashBord({ children }) {

    return (
        <>

            <div className="container-fluid">
                <div className="Dashboard row">
                    <div >
                        <div className="h-100">
                            <div className="mb-3 pb-1 row">
                                <div >
                                    <div className="d-flex align-items-lg-center flex-lg-row flex-column">
                                        <div className="flex-grow-1">
                                            <h4 className="fs-16 mb-1">
                                                Good Afternoon
                                                ,
                                                shraddha!
                                            </h4>
                                            <p className="text-muted mb-0">Here's what's happening with your store today.</p>
                                        </div>
                                        <div className="mt-3 mt-lg-0"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-3 col-md-6">
                                    <div className="card card-animate card">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <p className="text-uppercase fw-500 text-muted text-truncate mb-0">TOTAL EARNINGS</p>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <h5 className="text-success fs-14 mb-0">+16.24%</h5>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-end justify-content-between mt-4">
                                                <div>
                                                    <h4 className="fs-20 fw-500 ff-secondary mb-4">$559.25k</h4>
                                                    <Link href='/' className="text-decoration-underline">View net earnings</Link>
                                                </div>
                                                <div className="avatar-sm flex-shrink-0">
                                                    <span className="bg-soft-success avatar-title rounded fs-3">
                                                        <Icon icon="solar:chat-round-money-bold-duotone" color="#495057" width="25" height="25" />

                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="card card-animate card">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <p className="text-uppercase fw-500 text-muted text-truncate mb-0">ORDERS</p>
                                                </div>
                                                <div className="flex-shrink-0 ">
                                                    <h5 className="text-danger fs-14 mb-0">-3.57%</h5>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-end justify-content-between mt-4">
                                                <div>
                                                    <h4 className="fs-20 fw-500 ff-secondary mb-4">36,894</h4>
                                                    <Link href="/" className="text-decoration-underline">View all orders</Link>
                                                </div>
                                                <div className="avatar-sm flex-shrink-0">
                                                    <span className="bg-soft-info avatar-title rounded fs-3">
                                                        <Icon icon="ph:bag-duotone" color="#495057" width="25" height="25" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="card card-animate card">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <p className="text-uppercase fw-500 text-muted text-truncate mb-0">CUSTOMERS</p>
                                                </div>
                                                <div className="flex-shrink-0 ">
                                                    <h5 className="text-success fs-14 mb-0">+29.08</h5>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-end justify-content-between mt-4">
                                                <div>
                                                    <h4 className="fs-20 fw-500 ff-secondary mb-4">183.3M</h4>
                                                    <Link href="/" className="text-decoration-underline">See details</Link>
                                                </div>
                                                <div className="avatar-sm flex-shrink-0">
                                                    <span className="bg-soft-info avatar-title rounded fs-3">
                                                        <Icon icon="healthicons:ui-user-profile" color="#495057" width="25" height="25" />

                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6">
                                    <div className="card card-animate card">
                                        <div className="card-body">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1 overflow-hidden">
                                                    <p className="text-uppercase fw-500 text-muted text-truncate mb-0">TOTAL-EARNING</p>
                                                </div>
                                                <div className="flex-shrink-0 ">
                                                    <h5 className=" fs-14 mb-0">+16.24%</h5>
                                                </div>
                                            </div>
                                            <div className="d-flex align-items-end justify-content-between mt-4">
                                                <div>
                                                    <h4 className="fs-20 fw-500 ff-secondary mb-4">$165.89K</h4>
                                                    <Link href="/" className="text-decoration-underline">Withdraw money</Link>
                                                </div>
                                                <div className="avatar-sm flex-shrink-0">
                                                    <span className="bg-soft-info avatar-title rounded fs-3">

                                                        <Icon icon="solar:chat-round-money-bold-duotone" color="#495057" width="25" height="25" />


                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div >
                <Card>
                    <CardBody>
                        <h1 className="chart-heading">Line Chart</h1>
                        <ResponsiveContainer aspect={3} width="100%">
                            <LineChart data={pdata} width={500} height={300} >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" interval={'preserveStartEnd'} tickFormatter={(value) => value + " City "} />
                                <Tooltip contentStyle={{ backgroundColor: "lightblue", borderRadius: "10px" ,fontFamily: "sans-serif", fontSize: "15px"}} />
                                <YAxis />
                                <Legend />
                                <Line dataKey="orders" stroke="green" activeDot={{ r: 5 }} type={"monotone"} />
                                <Line dataKey="Quantity" stroke="blue" activeDot={{ r: 5 }} type={"natural"} />
                            </LineChart>
                        </ResponsiveContainer>

                    </CardBody>

                    <CardBody>
                        <h1 className="chart-heading">Area Chart</h1>
                        <ResponsiveContainer aspect={3} width="100%" height="100%">
                            <AreaChart
                                data={pdata}
                                width={500}

                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" interval={'preserveStartEnd'} tickFormatter={(value) => value + " City "} />
                                <Tooltip contentStyle={{ backgroundColor: "lightblue", borderRadius: "10px" ,fontFamily: "sans-serif", fontSize: "15px"}} />
                                <YAxis />
                                <Legend />
                                < Area dataKey="orders" stroke="green" activeDot={{ r: 5 }} type={"monotone"} />
                                <Area dataKey="Quantity" stroke="blue" activeDot={{ r: 5 }} type={"natural"} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </CardBody>


                    <CardBody>
                        <h1 className="chart-heading">Bar Chart</h1>
                        <ResponsiveContainer aspect={3} width="100%" height="100%">
                            <BarChart
                                data={pdata}
                                width={500}

                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" interval={'preserveStartEnd'} tickFormatter={(value) => value + " City "} />
                                <Tooltip contentStyle={{ backgroundColor: "lightblue", borderRadius: "10px", fontFamily: "sans-serif", fontSize: "15px" }} />
                                <YAxis />
                                <Legend />
                                <Bar dataKey="orders" fill=" #8884d8"  />
                                <Bar dataKey="Quantity" fill="#82ca9d"  />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardBody>




                    <CardBody>
                        <h1 className="chart-heading">Radar Chart</h1>

                        <ResponsiveContainer aspect={3} width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={pdata}>
                                <PolarGrid />
                                <Tooltip contentStyle={{ backgroundColor: "lightblue", borderRadius: "10px", fontFamily: "sans-serif", fontSize: "15px" }} />

                                <PolarAngleAxis dataKey="name" />
                                <PolarRadiusAxis />
                                <Radar name="orders" dataKey="orders" stroke="green" fill="#8884d8" fillOpacity={0.6} />
                            </RadarChart>
                        </ResponsiveContainer>
                    </CardBody>
                </Card>









            </div>
        </>
    )
}