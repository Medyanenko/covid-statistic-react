import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css"

const Navbar = (props) => {
    return(
        <nav className={s.nav}>
            <div>
                <NavLink to="/world" className = { navData => navData.isActive ? s.active : s.item }>World</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/country" className = { navData => navData.isActive ? s.active : s.item }>Country</NavLink>
            </div>
             <div className={s.item}>
                <NavLink to="/about" className = { navData => navData.isActive ? s.active : s.item }>About</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;