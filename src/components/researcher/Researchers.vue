<script setup lang="ts">

// import ResearcherItem from "@/components/researcher/ResearcherItem.vue";
import {onMounted, ref} from "vue";
import {ResearcherService} from "@/services/Researcher.ts";
import {ResearcherFile} from "@/types/researcher_file.ts";
import Github from "@/services/Github.ts";
import {useRoute} from "vue-router";

const route = useRoute();

const researcher_files = ref<ResearcherFile[]>([]);

const login = async () => {
  if (Github.logged()) {
    return
  }
  const code = route.query.code as string;
  if (code) {
    try {
      await Github.authenticate(code);
      // await router.replace({query: {}}); // 清除URL中的code参数
    } catch (error) {
      console.error(error);
    }
  } else {
    await Github.login()
  }
};

onMounted(async () => {
  await login()
  researcher_files.value = await ResearcherService.getResearcherFiles();
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
  <div v-if="researcher_files.length">
    <a-table
        v-if="researcher_files.length > 0"
        :columns="columns"
        :data-source="researcher_files"
    >
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'name'">
          <a :href="`/researcher/${record.ID}`">{{ record.name }}</a>
        </template>
      </template>
    </a-table>
  </div>
  <div v-else>
    Loading researchers...
  </div>

</template>

<style scoped>

</style>