import style from "./NotFound.module.css"
import { NavLink } from "react-router-dom"
import sadPikachu from "../../assets/pikachu-sad.png"


const NotFound = () => {
    return(
        <div className={style.bigDiv}>
            <div className={style.container}>
          <h1>Error 404: Page Not Found</h1>
          <img src={sadPikachu} className={style.errorImage} alt="Error"/>
        </div>
          <NavLink to="/home"><button>Back Home</button></NavLink>
        </div>
    )
}

export default NotFound