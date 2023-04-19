
import { Icon } from "@iconify/react";
import Link from "next/link";



export default function DashBord({ children }) {

    return (
        <>

            <div className="container-fluid">
                <div className="Dashboard row">
                    <div className="col">
                        <div className="h-100">
                            <div className="mb-3 pb-1 row">
                                <div className="col-sm-12">
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


        </>
    )
}