interface PostProps{
    post:string;
}

export const Posts = ({post}:PostProps) =>{

    return (
        <h1>{post}</h1>
    )
}