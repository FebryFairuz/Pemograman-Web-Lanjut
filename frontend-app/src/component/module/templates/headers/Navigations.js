import React, {useState} from 'react'
import NavItem from "./NavItem";

export function Navigations() {
    const [menu,setMenu] = useState([{"name":"Home","icon":"fa-home","url":"/"},
                                     {"name":"Messages","icon":"fa-envelope-o","url":"/messages"},
                                     {"name":"Profile","icon":"fa-user-o","url":"/profile"},
                                     {"name":"Sign Out","icon":"fa-sign-out","url":"/sign-out"},
                                    ]);
    return (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top"  style={{backgroundColor:"#7952b3"}}>
            <div className="container-fluid">
                <a className="navbar-brand" href="">IBIK</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                        data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <form className="d-flex w-100 px-5">
                        <div className="input-group">
                            <input className="form-control" type="search" placeholder="Search" ariaLabel="Search" />
                            <span class="input-group-text" id="basic-addon1"><i className="fa fa-search"></i></span>
                        </div>
                        
                    </form>
                    <NavItem data={menu} />                                              
                </div>
            </div>
        </nav>
    )
}

export default Navigations;