import { Container, Typography } from "@suid/material"
import { TaskType } from "../../types/Task"

export function Task({ task }: { task: TaskType }) {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        backgroundColor: "white",
        margin: "8px 0",
        borderRadius: "8px",
        padding: "8px",
        maxLines: 2,
        maxHeight: "100px",
        overflow: "auto",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
        cursor: "grab",
      }}
      onDragStart={(e) => {
        e.dataTransfer?.setData("text/json", JSON.stringify(task))
      }}
      draggable
    >
      <Typography
        sx={{
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {task.title}
      </Typography>
      <Typography
        sx={{
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        {task.description}
      </Typography>
    </Container>
  )
}
