<script setup lang="ts">
import {Other} from "@/types/other.ts";
import {inject} from "vue";
import {Theme, themes} from "@/theme.ts";

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
const theme = inject<Theme>('theme', themes.green);
</script>

<template>
  <h2>Other</h2>
  <a-config-provider
      :theme="{
            components: {
              Table: {
                colorBgContainer: theme.colorBgBody, // button背景色
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