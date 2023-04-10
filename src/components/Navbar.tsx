import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@suid/material"
import { useTasks } from "../TasksProvider"
import { lorem, mocksTitle } from "../data/tasks"

export function Navbar() {
  //@ts-ignore
  const [tasks, { createNewTask }] = useTasks()

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Kanban
          </Typography>
          <Button
            color="inherit"
            onClick={() => {
              createNewTask({
                id: tasks().length + 1,
                title: mocksTitle[Math.floor(Math.random() * mocksTitle.length)],
                description: lorem.generateSentences(5),
                state: "todo",
              })
            }}
          >
            New Task
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
