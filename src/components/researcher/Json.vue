<script setup lang="ts">
import {ResearcherService} from "@/services/Researcher.ts";

const props = defineProps<{
  researcher_id: number
  name: string
}>();

async function download() {
  const j = await ResearcherService.getResearcherById(props.researcher_id);
  const blob = new Blob([JSON.stringify(j)], { type: 'text/json;charset=utf-8' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `${props.researcher_id.toString().padStart(4, '0')}.${props.name}.json`;
  link.click();
  URL.revokeObjectURL(link.href);
}
</script>

<template>
  <a-button @click="download">Json</a-button>
</template>

<style scoped>

</style>