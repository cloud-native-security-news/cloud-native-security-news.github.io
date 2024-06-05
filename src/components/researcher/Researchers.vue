<script setup lang="ts">

// import ResearcherItem from "@/components/researcher/ResearcherItem.vue";
import {inject, onMounted, Ref, ref} from "vue";
import {ResearcherService} from "@/services/Researcher.ts";
import {GithubFile} from "@/types/github_file.ts";
import Github from "@/services/Github.ts";
import {useRoute} from "vue-router";
import {Theme} from "@/theme.ts";

const route = useRoute();

const files = ref<GithubFile[]>([]);

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
  files.value = await ResearcherService.getResearcherFiles();
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

const theme = inject<Ref<Theme>>('theme');
if (!theme) {
  throw 'theme undefined'
}
</script>

<template>
  <div v-if="files.length">
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
                colorText: 'white'
              }
            }
          }"
    >
      <a-table
          v-if="files.length > 0"
          :columns="columns"
          :data-source="files"
      >
        <template #bodyCell="{ column, record }">
          <template v-if="column.key === 'name'">
            <a :href="`/researcher/${record.ID}`">{{ record.name }}</a>
          </template>
        </template>
      </a-table>
    </a-config-provider>
  </div>
  <div v-else>
    Loading researchers...
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

::v-deep(a) {
  color: var(--colorLink);
  /* color: #fc80ff; */
  text-decoration: underline;
  text-decoration-color: dimgray;
  text-underline-offset: 0.2em;
  margin-bottom: 10px;
}

::v-deep(a:hover) {
  color: var(--colorHighlight);
  /* color: white; */
}
</style>