import style from "./Card.module.css";
import types from "./types.module.css"
import { NavLink } from "react-router-dom";

const Card = (props) => {
    let color = props.types[0];
    if(props.types.length > 1 && color === "normal") color = props.types[1]

    return(
    <div key={props.id} className={style.container}>
        <div className={`${style.header} ${types[color]}`}></div>
        <div className={style.pokebola}><NavLink to={`/pokemons/${props.id}`}><img src={props.image} alt={props.name}/></NavLink></div>
        <div className={StyleSheet.pokemonInfo}>
        <h3 className={style.name}>{props.name.toUpperCase()}</h3>
        <div className={style.types}>
        {props.types.map((type, index) => { 
            return <div className={`${types[color]} ${style.type}` }key={index}>{type}</div>
        })}
        </div>
        </div>
    </div>
    )
}

export default Card

