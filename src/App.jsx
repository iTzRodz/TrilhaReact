import { Header } from "./components/Header"
import { SideBar } from "./components/SideBar";
import { Post } from "./components/Post";

import styles from './App.module.css';
import './global.css';

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <aside>
          <SideBar />
        </aside>
        <main>
          <Post />
          <Post />
        </main>
      </div>

    </>
  )
}

export default App
