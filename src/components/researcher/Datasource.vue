<script setup lang="ts">

import {DataSource} from "@/types/datasource.ts";

defineProps<{
  data_sources: DataSource[]
}>();
const columns = [
  {
    title: 'DataSource',
    dataIndex: 'data_source',
    key: 'data_source'
  },
  {
    title: 'Usage',
    dataIndex: 'usage',
    key: 'usage'
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description'
  },
]
</script>

<template>
  <h2>DataSource</h2>
  <a-table
      v-if="data_sources.length > 0"
      :columns="columns"
      :data-source="data_sources"
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'data_source'">
        <a :href="record.url">{{ record.name }}</a>
      </template>
    </template>
  </a-table>
</template>

<style scoped>

</style>