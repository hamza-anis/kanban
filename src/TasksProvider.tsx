import { createSignal, createContext, useContext } from "solid-js"
import { TaskType } from "../types/Task"

const TasksContext = createContext()

export function TasksProvider(props: any) {
  const [tasks, setTasks] = createSignal(props.tasks),
    uptasks = [
      tasks,
      {
        setNewState(id: number, state: string) {
          const newTasks = tasks().map((task: TaskType) => {
            if (task.id === id) {
              task.state = state
            }
            return task
          })
          setTasks(newTasks)
        },
        createNewTask(task: TaskType) {
          setTasks([...tasks(), task])
        },
      },
    ]
  return (
    <TasksContext.Provider value={uptasks}>
      {props.children}
    </TasksContext.Provider>
  )
}

export function useTasks() {
  return useContext(TasksContext)
}
