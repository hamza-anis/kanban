import type { Component } from "solid-js"

import styles from "./App.module.css"
import { Kanban } from "./components/Kanban"
import { Navbar } from "./components/Navbar"

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Navbar />
      <Kanban />
    </div>
  )
}

export default App
