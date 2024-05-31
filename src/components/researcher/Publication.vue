<script setup lang="ts">
import {Publication, PublicationType, Type} from "@/types/publication.ts";

defineProps<{
  publications: Publication[]
}>();
const columns = [
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Publication',
    dataIndex: 'publication',
    key: 'publication',
  },
  {
    title: 'Published',
    dataIndex: 'published',
    key: 'published',
  },
]
</script>

<template>
  <h2>Publication</h2>
  <a-config-provider
      :theme="{
            components: {
              Table: {
                colorBgContainer: '#25242f', // 表格背景色, 不能设置为transparent
                colorText: '#ffffff',
                colorTextHeading: '#ffffff'
              },
              Pagination: {
                colorBgContainer: '#25242f', // button背景色
                colorPrimary: '#fc80ff', // 框架线条色
                colorPrimaryHover: 'white', // 框架线条色
                colorText: 'white',
              }
            },
          }"
  >
    <a-table
        v-if="publications.length > 0"
        :columns="columns"
        :data-source="publications"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'type'">
          {{ PublicationType[record.type as Type] }}
        </template>
        <template v-else-if="column.key === 'publication'">
          <a :href="record.url" target="_blank">{{ record.name }}</a>
        </template>
      </template>
    </a-table>
  </a-config-provider>
</template>

<style scoped>

</style>