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
                colorPrimary: '#5de164', // 框架线条色
                colorPrimaryHover: 'white', // 框架线条色
                colorText: 'white',
              }
            },
          }"
  >
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
  </a-config-provider>
</template>

<style scoped>

</style>