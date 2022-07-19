import { PencilLine } from "phosphor-react"
import { imgDeveloper, imgGithubProfile } from "../../assets/url-photos"
import styles from "./Sidebar.module.css"

export const Sidebar = () =>{

    return(
        <aside className={styles.sidebar}>
            <img className={styles.cover} src={imgDeveloper} alt="image developer" />

            <div className={styles.profile}>

                <img src={imgGithubProfile} alt="Github Profile" />

                <strong>Arthur Teixeira</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="">
                <PencilLine size={16}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}