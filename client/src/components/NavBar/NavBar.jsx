import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import logo from "../../assets/pokemon-text.png"

const NavBar = () => {
    return(
        <div className={style.mainContainer}>
            <nav className={style.navbar}>
                <div className={style.logo}><NavLink to="/home"><img src={logo} alt="logo"></img></NavLink></div>
                <div className={style.navLinks}>
                    <NavLink to="/create" className={style.link}>Create Pokemon</NavLink>
                    <NavLink to="/" className={style.link}>Logout</NavLink>
                    <SearchBar/>
                </div>
            </nav>
        </div>
    )
}

export default NavBar