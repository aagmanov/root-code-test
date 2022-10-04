<script setup lang="ts">
import type { ComputedRef } from 'vue'
import { computed, reactive } from 'vue'
import { tasks, initTasks, updateTaskStatus } from '../src/composables/useTasks'
import Table from './components/Table.vue'

const inProgressTasks: ComputedRef<Task[]> = computed(() => 
  tasks.value.filter(task => task.status === 'inProgress')
)

const reviewTasks: ComputedRef<Task[]> = computed(() => 
  tasks.value.filter(task => task.status === 'review')
)

const testTasks: ComputedRef<Task[]> = computed(() => 
  tasks.value.filter(task => task.status === 'test')
)

const table: Table = reactive({
  'inProgress': {
    status: 'inProgress',
    tasks: inProgressTasks
  },
  'review': {
    status: 'review',
    tasks: reviewTasks
  },
  'test': {
    status: 'test',
    tasks: testTasks
  },
})

const onItemDrop = (id: number, status: TaskStatus): void => {
  updateTaskStatus(id, status)
}

initTasks(5)
</script>

<template>
  <Table :table="table" @itemDrop="onItemDrop"/>
</template>
