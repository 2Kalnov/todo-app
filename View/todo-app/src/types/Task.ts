import {TaskStatus} from "./TaskStatus";

export type Task = {
  title: string
  description?: string
  doneDate: string
  status: TaskStatus
  createdAt: string
  updatedAt: string
}