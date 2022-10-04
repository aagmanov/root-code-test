type TaskStatus = 'inProgress' | 'review' | 'testing'

interface Task {
  id: number
  title: string
  description: string
  status: TaskStatus
}

interface Tasks {
  items: Task[]
}

interface Table {
  inProgress: Task[],
  review: Task[],
  testing: Task[]
}
