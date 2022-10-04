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
      v-for="(value, key) in table"
      :key="key"
      @drop="onDrop($event, key)"
      @dragover.prevent
      @dragenter.prevent
      class="flex flex-col gap-y-2"
    >
      <div class="text-center">{{ key }}</div>
      <ul class="p-2 h-full space-y-2 border border-1 border-gray-400">
        <li 
          v-for="task in value"
          :key="task.id"
          draggable="true"
          @dragstart="onDragstart($event, task)"
          class="p-1 border border-1 border-gray-500 duration-100 hover:bg-gray-800"
        >
          {{ task.title }}<br>
          {{ task.description }}
        </li>
      </ul>
    </div>
  </div>
</template>