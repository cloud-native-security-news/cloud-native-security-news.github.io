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
        :columns="columns"
        :data-source="others"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'item'">
          <a :href="record.url">{{ record.name }}</a>
        </template>
      </template>
    </a-table>
  </a-config-provider>
</template>

<style scoped>

</style>