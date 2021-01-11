import {TaskStatus} from "./TaskStatus";

export type Task = {
  id: number
  title: string
  description?: string
  doneDate: string
  status: TaskStatus
  createdAt: string
  updatedAt: string
}