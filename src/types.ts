type TaskStatus = 'inProgress' | 'review' | 'test'

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
  inProgress: {
    status: TaskStatus
    tasks: Task[]
  },
  review: {
    status: TaskStatus,
    tasks: Task[]
  },
  'test': {
    status: TaskStatus,
    tasks: Task[]
  }
}