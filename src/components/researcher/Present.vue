<script setup lang="ts">

import {Present} from "@/types/present.ts";

defineProps<{
  presents: Present[]
}>();
const columns = [
  {
    title: 'Present',
    dataIndex: 'present',
    key: 'present'
  },
  {
    title: 'Material',
    dataIndex: 'material',
    key: 'material'
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date'
  },
]
</script>

<template>
  <h2>Present</h2>
  <a-table
      :columns="columns"
      :data-source="presents"
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'present'">
        <a v-if="record.event_url" :href="record.event_url">{{ record.name }}</a>
        <span v-else>{{ record.name}}</span>
      </template>
      <template v-else-if="column.key === 'material'">
        <a v-if="record.slide_url" :href="record.slide_url">slide</a>
        <br v-if="record.slide_url && (record.video_url || record.paper_url || record.picture_url)">
        <a v-if="record.video_url" :href="record.video_url">video</a>
        <br v-if="record.video_url && (record.paper_url || record.picture_url)">
        <a v-if="record.paper_url" :href="record.paper_url">paper</a>
        <br v-if="record.paper_url && record.picture_url">
        <a v-if="record.picture_url" :href="record.picture_url">picture</a>
      </template>
    </template>
  </a-table>
</template>

<style scoped>

</style>