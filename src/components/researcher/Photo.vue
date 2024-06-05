<script setup lang="ts">

import {Photo} from "@/types/photo.ts";

defineProps<{
  photos: Photo[]
}>();

</script>

<template>
  <a-carousel arrows dots-class="slick-dots slick-thumb">
    <template #customPaging="props">
      <a>
        <img alt="" :src="photos[props.i].url" />
      </a>
    </template>
    <div v-for="item in photos.length" :key="item" class="carousel-item">
      <img alt="" :src="photos[item - 1].url" width="100%"/>
      <p class="description">{{photos[item-1].description}}</p>
    </div>
  </a-carousel>
</template>

<style scoped>
:deep(.slick-dots) {
  position: relative;
  height: auto;
}
:deep(.slick-slide img) {
  border: 5px solid #fff;
  display: block;
  margin: auto;
  max-width: 80%;
}
:deep(.slick-arrow) {
  display: none !important;
}
:deep(.slick-thumb) {
  bottom: 0;
}
:deep(.slick-thumb li) {
  width: 60px;
  height: 45px;
}
:deep(.slick-thumb li img) {
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
  display: block;
}
:deep .slick-thumb li.slick-active img {
  filter: grayscale(0%);
}

.carousel-item {
  text-align: center;
}

.description {
  color: white;
}

</style>