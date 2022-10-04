<script setup lang="ts">
const props = defineProps<{
  table: Table
}>()

const emit = defineEmits<{
  (e: 'itemDrop', id: number, status: TaskStatus): void
}>()

const onDragstart = (e: DragEvent, task: Task): void => {
  e.dataTransfer!.effectAllowed = 'move'
  e.dataTransfer!.dropEffect = 'move'
  e.dataTransfer!.setData('id', `${task.id}`)
}

const onDrop = (e: DragEvent, status: TaskStatus): void =>
  emit('itemDrop', +e.dataTransfer!.getData('id'), status)
</script>

<template>
  <div class="h-full grid grid-cols-3 gap-x-6">
    <div
      v-for="cell in table"
      :key="cell.status"
      @drop="onDrop($event, cell.status)"
      @dragover.prevent
      @dragenter.prevent
      class="p-2 h-full space-y-2 border border-1 border-gray-400"
    >
      <div 
        v-for="task in cell.tasks"
        :key="task.id"
        draggable="true"
        @dragstart="onDragstart($event, task)"
        class="p-1 border border-1 border-gray-500"
      >
        <div class="text-center">
          {{ task.title }}<br>
          {{ task.description }}
        </div>
      </div>
    </div>
  </div>
</template>