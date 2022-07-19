import { imgGithubProfile } from "../../assets/url-photos";
import { Comment } from "../Comment/Comment";
import styles from "./Posts.module.css"

interface PostProps{
    post:string;
}

export const Posts = ({post}:PostProps) =>{

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img src={imgGithubProfile} alt="Github Profile" />
                    <div className={styles.authorInfo}>
                        <strong>Arthur Teixeira</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Texto</p>
                <p><a href="">arthur.web/github</a></p>
                <p>
                    <a href="">#rocketseat</a>{' '}
                    <a href="">#github</a>{' '}
                    <a href="">#react</a>{' '}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe o seu feedback</strong>

                <textarea
                    placeholder="Deixe um comentário!"

                />
                <button type="submit">Publicar</button>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}