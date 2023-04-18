import Image from 'next/image'
import React from 'react'
import svg from '../../assets/images/us.svg';
import profile from '../../assets/images/profile.jpeg'
import { Icon } from '@iconify/react';
export default function Header() {
  return (
    <>
         <header>
                <div className="navbar-header">
                    <div className="d-flex">
                        <div className="header-item  px-3">
                            <span className="hamburger-icon open ">
                                <Icon icon="mdi:hamburger-menu-back" rotate={2} />

                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                        <div className="search mbView">

                            <input name="search" type="text" className="form-control search-options form-control" />
                            <Icon icon="ic:round-search" color="#878a99" width="20" height="20" />

                        </div>
                    </div>
                    <div className="d-flex align-items-center headerRight">
                        <li className="ms-1">
                            <span className="btn-topbar">
                                <Icon icon="ic:baseline-search" color="#495057" width="25" height="25" />

                            </span>
                        </li>
                        <li className="ms-1">
                            <span className="btn-topbar">
                                <Image src={svg} width="25" height="25" className="rounded" style={{ color: "transparent" }}></Image>
                              
                            </span>
                        </li>

                        <li className="ms-1 ">
                            <span className="btn-topbar">
                                <Icon icon="tabler:qrcode" className="fs-20" color="#495057" width="25" height="25" />


                            </span>
                        </li>
                        <li className="ms-1">
                            <span className="btn-topbar">
                                <Icon icon="ph:bag-bold" className="fs-20" color="#495057" width="25   " height="25" />

                            </span>
                        </li>
                        <li className="ms-1 mbView">
                            <span className="btn-topbar">
                                <Icon icon="radix-icons:enter-full-screen" className="fs-20" color="#495057" width="25" height="25" />

                            </span>
                        </li>
                        <li className="ms-1 mbView">
                            <span className="btn-topbar">
                                <Icon icon="material-symbols:light-mode-outline" className="fs-20" color="#495057" width="25" height="25" />

                            </span>
                        </li>
                        <li className="ms-1">
                            <span className="btn-topbar">
                                <Icon icon="carbon:notification" color="#495057" width="25" height="25" />

                                <span className="position-absolute topbar-badge fs-10 translate-middle badge rounded-pill bg-danger badge badge-secondary">3
                                    <span className="visually-hidden">unread messages</span>
                                </span>
                            </span>
                        </li>
                        <div className="user ms-sm-3 position-relative">
                            <button type="button" className="UserBtn btn btn-link">
                                <Image src={profile} width="32" height="32" className="rounded-circle" style={{ color: "transparent" }} />
                                <span className="text-start ms-xl-2">
                                    <span className=" d-xl-inline-block ms-1 fw-500 user-name-text"> Sagar Shraddha
                                    </span>
                                    <span className=" d-xl-block ms-1 fs-12 text-muted user-name-sub-text">admin
                                    </span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
    </>
  )
}
