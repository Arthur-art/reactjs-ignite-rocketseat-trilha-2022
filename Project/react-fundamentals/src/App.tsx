import { Header } from "./components/Header/Header"
import styles from "./App.module.css"
import "./global.css"
import { Posts } from "./components/Posts/Posts"
import { Sidebar } from "./components/Sidebar/Sidebar"

export function App() {

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Posts post="Hello World" />
          <Posts post="ReactJS" />
        </main>
      </div>
    </>
  )
}
