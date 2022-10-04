import type { Ref, ComputedRef } from 'vue'
import { ref, computed } from 'vue'

export const tasks: Ref<Task[]> = ref([])

export const inProgress: ComputedRef<Task[]> = computed(() => 
  tasks.value.filter(task => task.status === 'inProgress')
)

export const review: ComputedRef<Task[]> = computed(() => 
  tasks.value.filter(task => task.status === 'review')
)

export const testing: ComputedRef<Task[]> = computed(() => 
  tasks.value.filter(task => task.status === 'testing')
)

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
