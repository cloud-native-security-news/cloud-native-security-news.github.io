<script lang="ts" setup>
import {ref} from "vue";

const props = defineProps<{
  padding?: string,
  component?: any,
}>();
const current = ref()
let padding = props.padding ? props.padding : '100px';
</script>

<template>
  <div class="container" :style="{paddingLeft: padding, paddingRight: padding}">
    <div class="content">
      <div class="markdown">
        <component v-if="props.component !== undefined" :is="props.component" ref="current"/>
        <router-view v-else v-slot="{Component}" name="markdown">
          <component :is="Component" ref="current"/>
        </router-view>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin: auto;
  max-width: 1100px;
  text-align: left;
  word-wrap: break-word;
}

.padding {
  padding-left: 100px;
  padding-right: 100px;
}


::v-deep(table) {
  width: 100%;
}

::v-deep(th), ::v-deep(td) {
  border-bottom: 1px solid white;
  padding: 16px 16px;
}

::v-deep(a) {
  color: #59cf5e;
  /* color: #fc80ff; */
  text-decoration: underline;
  text-decoration-color: dimgray;
  text-underline-offset: 0.2em;
  margin-bottom: 10px;
}

::v-deep(a:hover) {
  color: #70fd7b;
  /* color: white; */
}

.markdown {
  margin-top: 20px;
}

::v-deep(.markdown h1) {
  text-align: center;
}

::v-deep(.markdown h2) {
  margin-top: .5em;
}

::v-deep(.markdown *) {
  max-width: 100%;
}


/* checkbox */

/*
::v-deep(input[type="checkbox"]) {
  //display: none;
}

::v-deep(input[type="checkbox"]:disabled + label) {
  //background-color: #eee;
  cursor: not-allowed;
}

::v-deep(label) {
  cursor: pointer;
  padding: 5px;
  //background-color: #ccc;
  display: inline-block;
  position: relative;
}

::v-deep(label::before) {
  content: 'a';
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 10px;
  //background-color: white;
  border: 1px solid #aaa;
  //position: absolute;
  //left: 0;
  //top: 50%;
  //transform: translateY(-50%);
}

::v-deep(input[type="checkbox"]:disabled + label::before) {
  background-color: #ddd;
}

::v-deep(input[type="checkbox"]:checked + label::before) {
  background-color: blue;
}
*/


::v-deep(input[type="checkbox"][disabled][checked]) {
  filter: invert(100%) hue-rotate(18deg) brightness(5);
}

::v-deep(input[type="checkbox"][disabled]) {
  filter: invert(100%) hue-rotate(18deg) brightness(5);
}

</style>