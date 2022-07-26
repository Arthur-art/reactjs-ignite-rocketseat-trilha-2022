import {format, formatDistanceToNow} from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { ChangeEvent, FormEvent, useState } from 'react';
import { Avatar } from "../Avatar/Avatar";
import { Comment } from "../Comment/Comment";
import styles from "./Posts.module.css"

type author = {
    avatar_url: string,
    name: string;
    role: string;
}

type content = {
    type: string;
    content: string;
}
interface PostProps{
    author: author;
    publishedAt: Date;
    content: content[];
}

export const Posts = ({author, publishedAt, content}:PostProps) =>{

    const [newComments, setNewComments] = useState("")

    const [comments, setComments] = useState([
        "Post muito bacana, hein ?"
    ])

    const publishedAtDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR
    })

    const publishedAtDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function setOnChangeComments(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity('')
        setNewComments(event.target.value)
    }

    function handleCreateNewComment(event: FormEvent){
        event.preventDefault()
        setComments([...comments, newComments])
        setNewComments("")
    }

    function deleteComments(commentDelete:string){
      const commentsFilter = comments.filter((commentsValue)=>{
            return commentsValue != commentDelete;
        })
        setComments(commentsFilter);
    }

    function handleNewCommentInvalid(event: ChangeEvent<HTMLTextAreaElement>){
        event.target.setCustomValidity("Esse campo é obrigatorio")
    }

    const newCommentIsValid = newComments.length === 0;

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>

                    <Avatar hasBorder profile={author.avatar_url} />
                    
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time
                 title={publishedAtDateFormatted}
                 dateTime={publishedAt.toISOString()}>{publishedAtDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
               {content.map((contentValue)=>{
                if(contentValue.type === "paragraph"){
                    return <p 
                    key={contentValue.content}>{contentValue.content}</p>
                }else{
                    return <p 
                    key={contentValue.content}>
                    <a href="#">{contentValue.content}</a></p>
                }
               })}
                <p>
                    <a href="">#rocketseat</a>{' '}
                    <a href="">#github</a>{' '}
                    <a href="">#react</a>{' '}
                </p>
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe o seu feedback</strong>

                <textarea
                    placeholder="Deixe um comentário!"
                    value={newComments}
                    onChange={setOnChangeComments}
                    onInvalid={handleNewCommentInvalid}
                    required
                />
                <button disabled={newCommentIsValid} type="submit">Publicar</button>
            </form>

            <div className={styles.commentList}>
                {comments.map((commentsValue)=>{
                    return <Comment 
                    deleteComments={deleteComments}
                    key={commentsValue}
                    content={commentsValue} />
                })}
            </div>
        </article>
    )
}