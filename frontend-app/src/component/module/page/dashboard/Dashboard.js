import React, { Component } from 'react'
import Logo from "../../../../media/logo/logo-ibik-web.png";

export class Dashboard extends Component {
    render() {

        return (
            <div className="container">
                <div className="d-flex align-items-center p-3 my-3 text-white rounded shadow-sm" style={{backgroundColor:"#6f42c1"}}>
                    <img className="me-3 bg-white rounded p-1" src={Logo} alt="Logo IBIK" width="18%" height="60"  />
                    <div className="lh-1">
                    <h1 className="h4 mb-1 text-white lh-1">Pemograman Web Lanjut</h1>
                    <small>Class 2021-2020</small>
                    </div>
                </div>

                <div className="content my-5">
                    <div className="card card-custom shadow-sm mb-5">
                        <div className="card-header border-0 bg-white">
                            <h3 className="card-title">Topic 1</h3>
                        </div>
                        <div className="card-body">
                            Installasi react
                        </div>
                    </div>

                    <div className="card card-custom shadow-sm mb-5">
                        <div className="card-header border-0 bg-white">
                            <h3 className="card-title">Topic 2</h3>
                        </div>
                        <div className="card-body">
                            create project react
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;