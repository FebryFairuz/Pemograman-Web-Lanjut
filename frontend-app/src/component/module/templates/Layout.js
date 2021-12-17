import React, { Component } from 'react'
import Navigations from "./headers/Navigations";
import RouteApp from "../../routers/RouteApp";

export class Layout extends Component {
    render() {
        return (
            <>
                <header> 
                    <Navigations />
                </header>

                <main style={{marginTop:"60px",paddingTop:"10px"}}>
                    <RouteApp />
                </main>

            </>
        )
    }
}

export default Layout;