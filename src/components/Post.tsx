import { Comment } from "./Comment"
import {format, formatDistanceToNow} from 'date-fns'
import {ptBR} from 'date-fns/locale/pt-BR'
import styles from "./Post.module.css"
import { useState } from "react"

export interface ContentType{
    type: 'paragraph' | 'link',
    content: string,
}

export interface AuthorType {
    avatarUrl: string,
    name: string,
    role: string,
}

export interface PostType {
    author: AuthorType,
    content: ContentType[],
    publishedAt: Date,

}



export function Post({author, content, publishedAt}: PostType){

    const [comments, setComments] = useState([
        'Post Bacana demais, amigo!'
    ])
    const [newCommentText, setNewCommentText] = useState('')

    const PublishedDateFormate = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{
        locale: ptBR,
    })

    const PublishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale:ptBR,
        addSuffix: true,
    })

    function handleCreateNewcontent(){
        event?.preventDefault()
        setComments([...comments, newCommentText])
        setNewCommentText('')
    }

    function handleNewCommentChange(){
        setNewCommentText(event?.target.value)
    }

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src={author.avatarUrl} alt="" />

                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={PublishedDateFormate} dateTime={publishedAt.toISOString()}>{PublishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {
                    content.map(line => {
                        if(line.type === 'paragraph'){
                            return <p>{line.content}</p>
                        } else if(line.type === 'link'){
                            return <p><a href="#">{line.content}</a></p>
                        }
                    })
                }
            </div>

            <form onSubmit={handleCreateNewcontent} className={styles.contentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name="comment"
                    placeholder="Deixe um comentário"
                    onChange={handleNewCommentChange}
                    value={newCommentText}
                />

                <footer>
                    <button type="submit">Comentar</button>
                </footer>
            </form>

            <div className={styles.List}>
                {comments.map(comment =>{
                    return <Comment content={comment.toString()}/>
                })}
            </div>
        </article>
    )
}