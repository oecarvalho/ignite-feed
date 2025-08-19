import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'
import { useState } from 'react';

interface TypeComments {
    content: string,
    onDeleteComment: (comment: string)=>void;
}

export function Comment({content, onDeleteComment}: TypeComments){
    const [likeCount, setLikeCount] = useState(0);

    function handleDeleteComment(){
        onDeleteComment(content)
    }

    function handleLikeComment(){
        setLikeCount(likeCount + 1)
    }

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

                        <button onClick={handleDeleteComment} title='deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp/>
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}