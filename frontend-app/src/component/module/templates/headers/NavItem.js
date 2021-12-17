import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = (props) =>{
    return (
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
        {(props.data) ? (
            props.data.map((v)=>(
                <li className="nav-item px-1" title={v.name}>
                    <Link className="nav-link fs-4" to={v.url}>
                        <i className={"fa "+v.icon}></i>
                        <span className="d-sm-none">{v.name}</span>
                    </Link>
                </li>
            ))
        ) : ''}        
        </ul>
    )
}

export default NavItem