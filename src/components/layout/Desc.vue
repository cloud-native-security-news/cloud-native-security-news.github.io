<script lang="ts" setup>

import {MenuItem} from "@/menu/menu_item";

const props = defineProps<{
  menu: MenuItem,
}>();

</script>

<template>
  <a-row>
    <router-link :to="`/${props.menu.key}?code=${$route.query.code}`" class="desc-link">
      <component :is="props.menu.icon" class="desc-icon"/>
      <span class="graph-title">{{ menu.title }}</span>
    </router-link>
  </a-row>
  <span style="word-wrap: break-word;"> {{ menu.description }}</span>
</template>

<style scoped>
.graph-title {
  margin-left: 10px;
}

a {
  font-weight: bold;
  text-decoration: underline;
  text-decoration-color: #919090;
  text-underline-offset: 0.4em;
  margin-bottom: 10px;
  color: var(--colorLink);
}

a:hover {
  color: var(--colorHighlight);
}

.desc-icon {
  color: var(--colorPrimary);
}
</style>