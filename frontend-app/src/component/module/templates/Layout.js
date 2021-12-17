import React, { Component } from 'react'
import Navigations from "./headers/Navigations";

export class Layout extends Component {
    render() {
        return (
            <div>
                <header> 
                    <Navigations />
                </header>

                <main className="flex-shrink-0" style={{marginTop:"80px",paddingTop:"10px"}}>
                    <div className="container">
                        <h5 className="">Hello world</h5>
                    </div>
                </main>

            </div>
        )
    }
}

export default Layout;