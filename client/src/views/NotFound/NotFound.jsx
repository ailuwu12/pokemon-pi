import style from "./NotFound.module.css"

const NotFound = () => {
    return(
        <div>
            <div className={style.container}>
          <h1>Error 404: Page Not Found</h1>
          <img src="https://pink.nyc3.cdn.digitaloceanspaces.com/2023/02/03/file_11106076_512x512.webp" className={style.errorImage} alt="Error"/>
        </div>
          <button onClick={() => window.location.reload()}>Back To Home</button>
        </div>
    )
}

export default NotFound