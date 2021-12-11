import React, { Component } from 'react'
import Chat from "../page/Chat";

export class Layout extends Component {
    render() {
        return (
            <div>
                <header> 
                    <nav className="navbar navbar-expand-md navbar-dark fixed-top"  style={{backgroundColor:"#7952b3"}}>
                        <div className="container-fluid">
                        <a className="navbar-brand" href="">IBIKFace</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <form className="d-flex w-100 px-5">
                                <div className="input-group">
                                    <input className="form-control" type="search" placeholder="Search" ariaLabel="Search" />
                                    <span class="input-group-text" id="basic-addon1"><i className="fa fa-search"></i></span>
                                </div>
                                
                            </form>
                            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                                <li className="nav-item px-1" title="Notifications">
                                    <a className="nav-link fs-4" aria-current="page">
                                        <i className="fa fa-globe"></i>
                                    </a>
                                </li>
                                <li className="nav-item px-1" title="Messages">
                                    <a className="nav-link fs-4">
                                        <i className="fa fa-envelope-o"></i>
                                    </a>
                                </li>
                                <li className="nav-item px-1" title="Profiles">
                                    <a className="nav-link fs-4">
                                        <i className="fa fa-user-o"></i>
                                    </a>
                                </li>
                            </ul>
                            
                        </div>
                        </div>
                    </nav>
                </header>

                <div className="container-fluid">
                    <main className="flex-shrink-0">
                        <div className="container">
                            <div style={{marginTop:"100px"}}>
                                <Chat />
                            </div>
                        </div>
                        
                    </main>
                </div>

            </div>
        )
    }
}

export default Layout;