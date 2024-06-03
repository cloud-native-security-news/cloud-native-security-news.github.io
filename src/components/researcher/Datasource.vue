<script setup lang="ts">

import {DataSource} from "@/types/datasource.ts";
import {inject} from "vue";
import {Theme, themes} from "@/theme.ts";

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
const theme = inject<Theme>('theme', themes.green);
</script>

<template>
  <h2>DataSource</h2>
  <a-config-provider
      :theme="{
            components: {
              Table: {
                colorBgContainer: theme.colorBgBody, // 表格背景色, 不能设置为transparent
                colorText: '#ffffff',
                colorTextHeading: '#ffffff'
              },
              Pagination: {
                colorBgContainer: theme.colorBgBody, // button背景色
                colorPrimary: theme.colorPrimary, // 框架线条色
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