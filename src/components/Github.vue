<script setup lang="ts">
import {onMounted, ref} from 'vue';
import Github from "@/services/Github.ts";
import {useRoute} from 'vue-router';

const files = ref([]);
const route = useRoute();

const login = async () => {
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

const listContents = async () => {
  const owner = 'cloud-native-security-news'
  const repo = 'researcher'
  const path = 'json'
  files.value = await Github.listRepositoryFiles(owner, repo, path);
};

onMounted(async () => {
  await login()
})
</script>

<template>
  <div>
    <button @click="login">Login to GitHub</button>
    <div>
      <button @click="listContents">List Contents</button>
    </div>
    <ul>
      <li v-for="file in files">
        {{ file }}
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>