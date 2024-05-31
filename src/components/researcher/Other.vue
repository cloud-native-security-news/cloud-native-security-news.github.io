<script setup lang="ts">
import {Other} from "@/types/other.ts";

defineProps<{
  others: Other[]
}>();
const columns = [
  {
    title: 'Item',
    dataIndex: 'item',
    key: 'item'
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description'
  },
]
</script>

<template>
  <h2>Other</h2>
  <a-table
      :columns="columns"
      :data-source="others"
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'item'">
        <a :href="record.url">{{ record.name }}</a>
      </template>
    </template>
  </a-table>
</template>

<style scoped>

</style>