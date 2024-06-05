<script setup lang="ts">
import Layout from "@/components/layout/Layout.vue";
import {provide, ref} from "vue";
import {themes} from "@/theme.ts";

const theme = ref(themes.green);
provide('theme', theme);

</script>

<template>
  <div id="app">
    <Layout/>
  </div>
</template>

<style>

html, body {
  line-height: 1.5;
}
</style>
