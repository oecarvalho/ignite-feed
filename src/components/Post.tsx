import { Comment } from "./Comment"
import styles from "./Post.module.css"



export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/oecarvalho.png" alt="" />

                    <div className={styles.authorInfo}>
                        <strong>Felipe Carvalho</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title="10 de Agosto ás 22:05" dateTime="2025-08-10 22:05:02">Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galera, tudo bem?</p>
                <p>Hoje conclui mais um módulo do curso de react da plataforma Rocketseat. Aprendi sobre componentização, hooks, props e muito mais. Além disso, tive a oportunidade de exercitar meus conhecimentos com alguns projetos incríveis!!</p>
                <p>Confirma mais em: <a href="#">https://github.com/oecarvalho</a></p>
                <p><a href="#">#novoProjeto #rocketseat #desenvolvimentoweb</a></p>
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