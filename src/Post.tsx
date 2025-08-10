
interface PostValues {
    author: string,
    content: string
}

export function Post({author, content} : PostValues){
    return(
        <div>
            <p>{author}</p>
            <p>{content}</p>
        </div>
    )
}