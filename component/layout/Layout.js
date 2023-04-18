import React, { Children } from 'react'
import Sidebar from './Sidebar'
import Header from './Header'

export default function Layout({ children }) {
    return (
        <>
            <Sidebar/>
            <Header />
            <main className="main-content">
                {children}
            </main>
        </>
    )
}
