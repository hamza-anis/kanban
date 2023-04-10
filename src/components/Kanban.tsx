import { Container } from "@suid/material"
import { Column } from "./Column"
import { TaskType } from "../../types/Task"
import { useTasks } from "../TasksProvider"
import { Task } from "solid-js"

export function Kanban() {
  //@ts-ignore
  const [tasks, { setNewState }] = useTasks()

  const todo = tasks().filter((task: TaskType) => task.state === "todo")
  const inProgress = tasks().filter(
    (task: TaskType) => task.state === "inProgress"
  )
  const done = tasks().filter((task: TaskType) => task.state === "done")

  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Column title="To Do" state="todo" />
      <Column title="In Progress" state="inProgress" />
      <Column title="Done" state="done" />
    </Container>
  )
}
