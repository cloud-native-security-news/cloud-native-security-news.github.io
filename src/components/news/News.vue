<script setup lang="ts">
import {onMounted, ref} from "vue";
import {GithubFile} from "@/types/github_file.ts";
import {NewsService} from "@/services/News.ts";
import Markdown from "@/components/markdown/Markdown.vue";
import News from "@/markdown/news/README.md"
import ImageWall from "@/components/gadget/ImageWall.vue";

const files = ref<GithubFile[]>([]);
onMounted(async () => {
  files.value = await NewsService.getNewsFiles();
});
</script>

<template>
  <div class="container">
    <ImageWall image="/assets/cnsn.jpeg" height="200px" background-color="#fff9db"/>
    <div class="content">
      <Markdown :component="News" padding="0" />
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