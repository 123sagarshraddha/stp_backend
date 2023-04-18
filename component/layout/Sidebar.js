import { Icon } from '@iconify/react'
import Image from 'next/image'
import React from 'react'
import Logo from '../../assets/images/STP.png';

export default function Sidebar() {
  return (
    <>
           <div className="navbar mbview">
                <div className="navbar-brand-box">
                    <div className="logo">
                        <span className="logo-sm">
                            <Image src={Logo} width="53" height="20"></Image>
                        </span>
                    </div>
                </div>
                <div className="navbar_inner">
                    <div className="navbarItem">
                        <div className="nav-link">
                            <Icon icon="material-symbols:border-all-rounded" color="#adb5bd" width="20" height="20" />
                        </div>
                        <div className="nav-link">
                            <Icon icon="fluent-mdl2:party-leader" color="#abd5bd" width="20" height="20" />
                        </div>
                        <div className="nav-link">
                            <Icon icon="mdi:customer-service" color="#abd5bd" width="20" height="20" />
                            <ul className="">
                              

                            </ul>
                        </div>

                        <div className="nav-link">
                            <Icon icon="uiw:setting-o" color="#abd5bd" width="20" height="20" />
                        </div>

                        <div className="nav-link">
                            <Icon icon="mdi:city-variant-outline" color="#abd5bd" width="20" height="20" />
                        </div>

                        <div className="nav-link">
                            <Icon icon="raphael:customer" color="#abd5bd" width="20" height="20" />
                        </div>

                        <div className="nav-link">
                            <Icon icon="material-symbols:communication" color="#abd5bd" width="20" height="20" />
                        </div>

                        <div className="nav-link">
                            <Icon icon="fluent:style-guide-24-regular" color="#abd5bd" width="20" height="20" />
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}
