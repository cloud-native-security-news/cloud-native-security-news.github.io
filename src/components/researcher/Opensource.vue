<script setup lang="ts">

import {Opensource, Role, Type} from "@/types/opensource.ts";

defineProps<{
  opensources: Opensource[]
}>();
const columns = [
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
    title: 'Proof',
    dataIndex: 'proof',
    key: 'proof'
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description'
  },
]
</script>

<template>
  <h2>Opensource</h2>
  <a-table
      v-if="opensources.length > 0"
      :columns="columns"
      :data-source="opensources"
  >
    <template #bodyCell="{ column, record }">
      <template v-if="column.key === 'project'">
        <a :href="record.repo_url">{{ record.repo_name }}</a>
      </template>
      <template v-else-if="column.key === 'proof'">
        <a :href="record.proof_url">{{ record.proof_name }}</a>
      </template>
      <template v-else-if="column.key === 'role'">
        {{ Role[record.role as Type] }}
      </template>
    </template>
  </a-table>
</template>

<style scoped>

</style>