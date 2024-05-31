<script setup lang="ts">
import {antdMenu} from "@/menu/menu";
import {useRouter} from "vue-router";
import {ItemType} from "ant-design-vue";
import {version} from "../version";
import HelloWorld from "@/components/HelloWorld.vue";
import Markdown from "@/components/markdown/Markdown.vue";

const router = useRouter()

const go = (item: ItemType) => {
  router.push('/' + item?.key?.toString());
}
</script>

<template>
  <a-config-provider
      :theme="{
        components: {
          Layout: {
            colorBgBody: '#25242f',   // layout content 背景
            colorBgHeader: '#fc80ff', // layout header 背景
            colorText: 'white',       // layout footer 文字颜色
          },
        },
      }"
  >
    <a-layout id="layout">
      <a-layout-header :style="{ position: 'fixed', zIndex: 1, width: '100%' }">
        <router-link to="/" class="logo">Cloud Native Security News</router-link>
        <a-config-provider
            :theme="{
            components: {
              Menu: {
                // fontSize: '18px',    // 菜单文字大小，但一设置，和icon的间距就不对了
                colorItemBg: '#fc80ff', // 菜单背景色
                colorBgElevated: '#fc80ff', // 次级菜单背景色
                colorItemTextHover: 'white', // 菜单hover
                colorItemTextSelectedHorizontal: 'white', // 菜单hover下划线颜色
                colorItemTextSelected: 'white',
                colorItemBgSelected: '#fc80ff',
              }
            },
          }"
        >
          <a-menu
              class="menu"
              @click="go"
              mode="horizontal"
              :items="antdMenu"
          />
        </a-config-provider>
      </a-layout-header>
      <a-layout-content class="content">
        <HelloWorld v-if="$route.path==='/hello-world'" msg=""/>
        <div v-else>
          <router-view></router-view>
          <Markdown/>
        </div>
      </a-layout-content>
      <a-config-provider
          :theme="{
        token: {
          colorText: 'white',
        }
      }"
      >
        <a-layout-footer class="footer">
          <span style="font-weight: bold; font-size: large">CNSN</span>
          <br><br>
          {{ version.version }} {{ version.time }}
        </a-layout-footer>
      </a-config-provider>
    </a-layout>
  </a-config-provider>
</template>

<style scoped>
.footer {
  text-align: center;
  margin-top: 60px;
}

.logo {
  height: 31px;
  float: left;
  font-size: 19px;
  font-weight: 600;
  color: black;
  font-family: Poppins, Poppins-fallback, Helvetica,
  Apple Color Emoji, Segoe UI Emoji, NotoColorEmoji, Noto Color Emoji,
  Segoe UI Symbol, Android Emoji, EmojiSymbols, -apple-system,
  BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Noto Sans,
  sans-serif
}

a:hover {
  color: white;
}

/*
.menu {
  float: right;
}
破坏了菜单的自动缩略功能
*/

.menu {
  display: flex;
  justify-content: flex-end;
}

.menu {
  font-weight: bold;
  font-size: 18px;
}

::v-deep(ant-menu-item) {
  font-size: 16px;
}

.content {
  color: #e1e1e1;
  padding-top: 70px;
}

#layout {
  min-height: 100vh;
}
</style>