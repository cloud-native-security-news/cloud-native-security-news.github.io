<script setup lang="ts">
import {onMounted, ref} from "vue";
import {GithubFile} from "@/types/github_file.ts";
import {NewsService} from "@/services/News.ts";

const files = ref<GithubFile[]>([]);
onMounted(async () => {
  files.value = await NewsService.getNewsFiles();
});
const columns = [
  {
    title: 'ID',
    dataIndex: 'ID',
    key: 'ID'
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Item',
    dataIndex: 'item',
    key: 'item'
  }
]
</script>

<template>
  <div class="container">
    <div v-if="files.length">
      <a-table
          v-if="files.length > 0"
          :columns="columns"
          :data-source="files"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'name'">
            <a :href="`/news/${record.ID}`">{{ record.name }}</a>
          </template>
        </template>
      </a-table>
    </div>
    <div v-else>
      Loading news...
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: auto;
  max-width: 1100px;
  padding-left: 100px;
  padding-right: 100px;
  text-align: left;
  word-wrap: break-word;
}

</style>