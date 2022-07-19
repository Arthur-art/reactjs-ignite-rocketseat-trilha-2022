import { imgDeveloper } from "../../assets/url-photos"
import styles from "./Sidebar.module.css"

export const Sidebar = () =>{

    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src={imgDeveloper} alt="image developer" />
            <div className={styles.profile}>
                <strong>Arthur Teixeira</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="">
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}