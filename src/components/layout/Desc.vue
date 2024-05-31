<script lang="ts" setup>

import {MenuItem} from "@/menu/menu_item";

const props = defineProps<{
  menu: MenuItem,
}>();
</script>

<template>
    <a-row>
      <router-link :to="'/' + props.menu.key">
        <component :is="props.menu.icon" :style="{color: '#52dd59'}"/>
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
  color: #4bcd52;
  font-weight: bold;
  text-decoration: underline;
  text-decoration-color: #919090;
  text-underline-offset: 0.4em;
  margin-bottom: 10px;
}
a:hover {
  color: #5de164;
}
</style>