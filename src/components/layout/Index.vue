<script lang="ts" setup>
import {menu} from "@/menu/menu.ts";
import Desc from "@/components/layout/Desc.vue";
</script>

<template>
  <div class="container">
    <div class="content">
      <a-row>
        <p class="title">CNSN</p>
      </a-row>
      <a-row>
        Cloud Native Security News
      </a-row>

      <a-row>
        <a-col v-for="item in menu" :key="'1' + item.key" :span="12" class="graph">
          <Desc :menu="item"/>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<style scoped>
.title {
  font-size: 48px;
  font-weight: bold;
}

.container {
  margin: auto;
  max-width: 1100px;
  padding-left: 100px;
  padding-right: 100px;
  text-align: left;
  word-wrap: break-word;
}

.graph {
  padding-right: 20px;
  margin-top: 30px;
}

.content {
  margin-top: 50px;
}
</style>