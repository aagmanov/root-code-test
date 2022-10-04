import type { Ref } from 'vue'
import { ref } from 'vue'

export const tasks: Ref<Task[]> = ref([])

export const initTasks = (amount: number): void => {
  for (let i = 0; i < amount; i++) {
    tasks.value.push({
      id: i,
      title: `title-${i}`,
      description: `description-${i}`,
      status: 'inProgress'
    })
  }
}

export const updateTaskStatus = (id: number, status: TaskStatus): void => {
  const task: Task | undefined = tasks.value.find(task => task.id === id)
  
  if (task) {
    task.status = status
  }
}
