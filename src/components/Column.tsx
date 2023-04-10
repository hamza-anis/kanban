import { Button, Grid, IconButton, Paper, Typography } from "@suid/material"
import { TaskType } from "../../types/Task"
import { Task } from "./Task"
import { createEffect, createSignal } from "solid-js"
import { useTasks } from "../TasksProvider"

export function Column({ title, state }: { title: string; state: string }) {
  //@ts-ignore
  const [tasks, { setNewState }] = useTasks()
  const [dragOver, setDragOver] = createSignal(false)

  createEffect(() => {})
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      sx={{
        border: "1px solid",
        borderColor: dragOver() ? "red" : "black",
      }}
      onDragOver={(e) => {
        e.preventDefault()
        setDragOver(true)
      }}
      onDragLeave={(e) => {
        e.preventDefault()
        setDragOver(false)
      }}
      onDrop={(e) => {
        e.preventDefault()
        const task: TaskType = JSON.parse(
          e.dataTransfer?.getData("text/json")?.toString()!
        )
        setNewState(task.id, state)
        setDragOver(false)
      }}
    >
      <Paper
        sx={{
          p: 2,
          textAlign: "center",
          backgroundColor: "black",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography>{title}</Typography>

        <Typography>
          {tasks().filter((task: TaskType) => task.state === state).length}
        </Typography>
      </Paper>
      {tasks().map((task: any) => {
        if (task.state === state) {
          return <Task task={task} />
        }
      })}
    </Grid>
  )
}
