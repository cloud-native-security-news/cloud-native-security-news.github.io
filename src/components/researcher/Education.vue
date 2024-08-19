<script setup lang="ts">

import {Education} from "@/types/education.ts";
import {Organization} from "@/types/organization.ts";

const props = defineProps<{
  educations: Education[]
  organizations: Organization[]
}>();

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return `${date.getFullYear()}.${date.getMonth() + 1}`;
};

const calculateDuration = (startDateStr: string, endDateStr: string) => {
  const startDate = new Date(startDateStr);
  const endDate = new Date(endDateStr);
  let months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + endDate.getMonth() - startDate.getMonth();
  const years = Math.floor(months / 12);
  months = months % 12;
  let result = '';
  if (years > 0) result += `${years} 年`;
  if (months > 0) result += ` ${months} 个月`;
  return result.trim() || '少于一个月';
};

const orgName = (id: number) => {
  return props.organizations.filter((org: Organization) => org.ID === id)[0].name
}
</script>

<template>
  <h3>教育经历</h3>
  <a-timeline>
    <a-timeline-item v-for="education in educations">
      <p>{{ orgName(education.organization_id) }} - {{ education.role }}</p>
      <p v-if="!education.start_date.startsWith('000')">
        <span>{{ formatDate(education.start_date) }}</span> ~
        <span v-if="education.until_now">
        至今
      </span>
        <span v-else>
        {{ formatDate(education.end_date) }}
      </span>
        &nbsp;
        <span v-if="!education.until_now">
        {{ calculateDuration(education.start_date, education.end_date) }}
      </span>
      </p>
      <p style="color: grey">{{ education.description }}</p>
    </a-timeline-item>
  </a-timeline>
</template>

<style scoped>

</style>