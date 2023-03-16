import { NavLink } from "react-router-dom";
import styles from "./Landing.module.css"

const Landing = () => {
    return(
        <div className={styles.background}>
            <div className={styles.container}>
            <div className={styles.pokebolaContainer}>
                <div className={styles.pokebola}>
                <NavLink to="/home"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/769px-Pokebola-pokeball-png-0.png" alt="Pokebola"/></NavLink>
                 </div>
            </div>
            <h1>Catch all Pokemons!</h1>
            </div>
        </div>
    )
}

export default Landing