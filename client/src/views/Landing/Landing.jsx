import { NavLink } from "react-router-dom";
import styles from "./Landing.module.css"
import pokeball from "../../assets/pokeball.png"

const Landing = () => {
    return(
        <div className={styles.background}>
            <div className={styles.container}>
            <div className={styles.pokebolaContainer}>
                <div className={styles.pokebola}>
                <NavLink to="/home"><img src={pokeball} alt="Pokebola"/></NavLink>
                 </div>
            </div>
            <h1>Catch all Pokemons!</h1>
            </div>
        </div>
    )
}

export default Landing