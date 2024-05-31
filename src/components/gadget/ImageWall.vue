<script lang="ts" setup>

defineProps<{
  image: string,
  height: string,           // 图片高度
  backgroundColor: string,  // 两侧填充颜色
}>();
</script>

<template>
  <div class="wall" :style="{height: height, backgroundColor: backgroundColor}">
    <img :src="image" alt="">
  </div>
</template>

<style scoped>
.wall {
  position: relative; /* 伪元素定位基础 */
  display: flex; /* 使用 Flexbox 居中图片 */
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  margin-bottom: 20px;
}

.wall img {
  max-width: 100%; /* 保证图片不超过容器宽度 */
  max-height: 100%; /* 保证图片不超过容器高度 */
  display: block; /* 防止默认的图片下边距 */
}

/* 可选：如果您希望图片保持宽高比，请添加以下代码 */
.wall img {
  width: auto; /* 自动适应高度 */
  height: auto; /* 自动适应宽度 */
  object-fit: scale-down; /* 确保图片内容按比例缩放 */
}

</style>