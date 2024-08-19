<script setup lang="ts">

import {Job} from "@/types/job.ts";
import {Organization} from "@/types/organization.ts";

const props = defineProps<{
  jobs: Job[]
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
  <h3>Job</h3>
  <a-timeline>
    <a-timeline-item v-for="job in jobs">
      <span>{{ orgName(job.organization_id) }} - {{ job.role }}</span>
      <br>
      <span>{{ formatDate(job.start_date) }}</span> ~
      <span v-if="job.until_now">
        至今
      </span>
      <span v-else>
        {{ formatDate(job.end_date) }}
      </span>
      &nbsp;
      <span v-if="!job.until_now">
        {{calculateDuration(job.start_date, job.end_date)}}
      </span>
      <br>
      <span style="color: grey">{{job.description}}</span>
    </a-timeline-item>
  </a-timeline>
</template>

<style scoped>

</style>