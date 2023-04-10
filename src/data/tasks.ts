import { LoremIpsum } from "lorem-ipsum"
import { TaskType } from "../../types/Task"

export const tasks: TaskType[] = [
  {
    id: 1,
    title: "Task 1",
    description: "Description 1",
    state: "todo",
  },
  {
    id: 2,
    title: "Task 2",
    description: "Description 2",
    state: "todo",
  },
  {
    id: 3,
    title: "Task 3",
    description: "Description 3",
    state: "done",
  },
]

export const mocksTitle = [
  "Handle credit card payments",
  "Add a product page",
  "Add a blog",
  "Add a contact page",
  "Add a newsletter",
  "Add a search bar",
  "Add a login page",
  "Add a sign up page",
  "Add a 404 page",
  "Add a 500 page",
  "Add a 503 page",
  "Add a 504 page",
  "Add a 505 page",
  "Add a 506 page",
  "Fix credit card payments",
  "Fix a product page",
  "Fix a blog",
  "Fix a contact page",
  "Fix a newsletter",
  "Fix a search bar",
  "Fix a login page",
  "Fix a sign up page",
]


export const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
})

