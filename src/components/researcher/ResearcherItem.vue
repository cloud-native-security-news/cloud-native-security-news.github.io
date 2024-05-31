<script setup lang="ts">
import {Researcher} from "@/types/researcher.ts";
import Datasource from "@/components/researcher/Datasource.vue";
import {computed, onMounted, ref} from "vue";
import {ResearcherService} from "@/services/Researcher.ts";
import Vulnerabilities from "@/components/researcher/Vulnerabilities.vue";
import Basic from "@/components/researcher/Basic.vue";
import Publication from "@/components/researcher/Publication.vue";
import Present from "@/components/researcher/Present.vue";
import Opensource from "@/components/researcher/Opensource.vue";
import Other from "@/components/researcher/Other.vue";
import Json from "@/components/researcher/Json.vue";

const props = defineProps<{
  researcher_id: number
}>();

const researcher = ref<Researcher | null>(null);

onMounted(async () => {
  researcher.value = await ResearcherService.getResearcherById(parseInt(props.researcher_id.toString()));
});

const filename = computed(() => {
  let filename = `${researcher.value?.name}`
  if (researcher.value?.nicknames) {
    filename += `(${researcher.value?.nicknames?.[0]?.nickname})`
  }
  return filename
})

</script>

<template>
  <div v-if="researcher">
    <Json :researcher_id="researcher_id" :name="filename"/>
    <a-row>
      <a-col :span="8">
        <basic :researcher="researcher"/>
      </a-col>
      <a-col :span="16">
        <Vulnerabilities :vulnerabilities="researcher.vulnerabilities" :researcher_id="researcher.ID"/>
        <Publication :publications="researcher.publications"/>
        <Present :presents="researcher.presents" />
        <Opensource :opensources="researcher.opensources"/>
        <Other :others="researcher.others"/>
        <Datasource :data_sources="researcher.data_sources"/>
      </a-col>
    </a-row>
  </div>
</template>

<style scoped>
.no-list-style {
  list-style: none;
}
</style>