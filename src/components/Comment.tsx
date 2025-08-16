import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

interface TypeComments {
    content: string;
}

export function Comment({content}: TypeComments){
    return(
        <div className={styles.comment}>
            <img src="https://github.com/oecarvalho.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Felipe Carvalho</strong>
                            <time title="10 de Agosto ás 22:05" dateTime="2025-08-10 22:05:02">Comentado há 1h</time>
                        </div>

                        <button title='deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}