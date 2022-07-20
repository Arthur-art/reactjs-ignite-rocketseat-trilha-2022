import { Header } from "./components/Header/Header"
import styles from "./App.module.css"
import "./global.css"
import { Posts } from "./components/Posts/Posts"
import { Sidebar } from "./components/Sidebar/Sidebar"
import { posts } from "./api"

export function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((postsValue)=>{
            return <Posts author={postsValue.author} publishedAt={postsValue.publishedAt} content={postsValue.content} />
          })}
        </main>
      </div>
    </>
  )
}
