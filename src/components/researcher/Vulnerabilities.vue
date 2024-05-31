<script setup lang="ts">
import {Vulnerability} from "@/types/vulnerability.ts";

defineProps<{
  vulnerabilities: Vulnerability[]
  researcher_id: Number
}>();

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id'
  },
  {
    title: 'Project',
    dataIndex: 'project',
    key: 'project'
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role'
  },
  {
    title: 'Tag',
    dataIndex: 'tag',
    key: 'tag'
  },
  {
    title: 'Exploit',
    dataIndex: 'exploit',
    key: 'exploit'
  },
  {
    title: 'Published',
    dataIndex: 'published',
    key: 'published'
  },
]
</script>

<template>
  <h2>Vulnerability
    <span v-if="vulnerabilities">{{ vulnerabilities.length }}</span>
  </h2>
  <a-table
      :columns="columns"
      :data-source="vulnerabilities"
      style="margin-top: 10px">
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'id'">
        {{ record.id }}
      </template>
      <template v-else-if="column.key === 'project'">
        <a :href="record.project.homepage">{{ record.project.name }}</a>
      </template>
      <template v-else-if="column.key === 'role'">
            <span v-for="credit in record.credits">
              <span v-if="credit.researcher_id === researcher_id">
                {{ credit.type }}&nbsp;
              </span>
            </span>
      </template>
      <template v-else-if="column.key === 'exploit'">
            <span v-for="exploit in record.exploits">
              <a :href="exploit.url" target="_blank">{{ exploit.name }}</a>&nbsp;
            </span>
      </template>
      <template v-else-if="column.key === 'tag'">
            <span v-for="tag in record.tags">
              <a-tag>{{ tag.name }}</a-tag>
            </span>
      </template>
      <template v-else-if="column.key === 'published'">
        {{ record.published }}
      </template>
    </template>
  </a-table>
</template>

<style scoped>

</style>