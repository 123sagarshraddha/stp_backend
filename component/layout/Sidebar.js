import { Icon } from '@iconify/react'
import Image from 'next/image'
import React from 'react'
import Logo from '../../assets/images/STP.png';
import SidebarData from '../Json/SidebarData.json';
import Link from 'next/link';
export default function Sidebar() {
    return (
        <>
            <div className="navbar mbview">
                <div className="navbar-brand-box">
                    <div className="logo">
                        <span className="logo-sm">
                            <Image src={Logo} width="53" height="20" alt='logo'></Image>
                        </span>
                    </div>
                </div>
                <div className="navbar_inner">
                    <div className="navbarItem">
                        {SidebarData.map((data) => {
                            console.log("data?.path",data?.Path)
                            return (
                                <Link href={data?.Path}>
                                    <div className="nav-link">
                                        <Icon icon={data.icon} color="#adb5bd" width="20" height="20" />
                                    </div>
                                </Link>)
                        })}

                    </div>

                </div>
            </div>
        </>
    )
}
