<script setup lang="ts">
import { reactive } from 'vue'
import {
  inProgress,
  review,
  testing, 
  initTasks, 
  updateTaskStatus
} from '../src/composables/useTasks'
import Table from './components/Table.vue'

const table: Table = reactive({
  'inProgress': inProgress,
  'review': review,
  'testing': testing
})

const onItemDrop = (id: number, status: TaskStatus): void => {
  updateTaskStatus(id, status)
}

initTasks(5)
</script>

<template>
  <Table :table="table" @itemDrop="onItemDrop"/>
</template>
