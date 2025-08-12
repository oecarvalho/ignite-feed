import { Comment } from "./Comment"
import {format, formatDistanceToNow} from 'date-fns'
import {ptBR} from 'date-fns/locale/pt-BR'
import styles from "./Post.module.css"

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

    const PublishedDateFormate = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{
        locale: ptBR,
    })

    const PublishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale:ptBR,
        addSuffix: true,
    })

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

            <form className={styles.contentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder="Deixe um comentário"
                />

                <footer>
                    <button type="submit">Comentar</button>
                </footer>
            </form>

            <div className={styles.List}>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )
}