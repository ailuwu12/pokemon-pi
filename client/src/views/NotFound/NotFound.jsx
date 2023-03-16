import style from "./NotFound.module.css"
import { NavLink } from "react-router-dom"

const NotFound = () => {
    return(
        <div>
            <div className={style.container}>
          <h1>Error 404: Page Not Found</h1>
          <img src="https://pink.nyc3.cdn.digitaloceanspaces.com/2023/02/03/file_11106076_512x512.webp" className={style.errorImage} alt="Error"/>
        </div>
          <NavLink to="/home"><button>Back Home</button></NavLink>
        </div>
    )
}

export default NotFound