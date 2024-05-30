<script setup lang="ts">
import {ref} from 'vue';
import Github from "@/services/Github.ts";

const files = ref([]);
const repoPath = ref('');

const login = () => {
  Github.login()
};

const listContents = async () => {
  if (repoPath.value) {
    const [owner, repo] = repoPath.value.split('/');
    files.value = await Github.listRepositoryFiles(owner, repo);
  }
};
</script>

<template>
  <div>
    <button @click="login">Login to GitHub</button>
    <div>
      <input v-model="repoPath" placeholder="Enter repo path like 'owner/repo/path'"/>
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