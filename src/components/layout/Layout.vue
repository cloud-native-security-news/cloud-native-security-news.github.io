<script setup lang="ts">
import {antdMenu} from "@/menu/menu";
import {useRouter} from "vue-router";
import {ItemType} from "ant-design-vue";
import {version} from "../version";
import HelloWorld from "@/components/HelloWorld.vue";
import Markdown from "@/components/markdown/Markdown.vue";
import {inject, onMounted, Ref, ref} from "vue";
import {Theme, themes} from "@/theme.ts";

const router = useRouter()

const go = (item: ItemType) => {
  router.push('/' + item?.key?.toString());
}

const mode = ref(false)

const theme = inject<Ref<Theme>>('theme', ref(themes.green));

const toggleTheme = function () {
  let themeLink = document.getElementById('theme-style') as HTMLLinkElement;
  if (!themeLink) {
    themeLink = document.createElement('link');
    themeLink.id = 'theme-style';
    themeLink.rel = 'stylesheet';
    document.head.appendChild(themeLink);
  }
  themeLink.href = mode.value ? `/assets/style/pink.css` : `/assets/style/green.css`;
  theme.value = mode.value ? themes.pink : themes.green;
}

onMounted(() => {
  toggleTheme();
})

</script>

<template>
  <a-config-provider
      :theme="{
        components: {
          Layout: {
            colorBgBody: theme.colorBgBody,   // layout content 背景
            colorBgHeader: theme.colorPrimary, // layout header 背景
            colorText: 'white',       // layout footer 文字颜色
          },
        },
      }"
  >
    <a-layout id="layout">
      <a-layout-header class="header">
        <router-link to="/" class="logo">Cloud Native Security News</router-link>
        <div class="header-right">
          <a-config-provider
              :theme="{
            components: {
              Menu: {
                // fontSize: '18px',    // 菜单文字大小，但一设置，和icon的间距就不对了
                colorItemBg: theme.colorPrimary, // 菜单背景色
                colorBgElevated: theme.colorPrimary, // 次级菜单背景色
                colorItemTextHover: 'white', // 菜单hover
                colorItemTextSelectedHorizontal: 'white', // 菜单hover下划线颜色
                colorItemTextSelected: 'white',
                colorItemBgSelected: theme.colorPrimary,
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
          <a-switch @change="toggleTheme" checked-children="pink" un-checked-children="green" v-model:checked="mode"/>
        </div>
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

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 1;
  width: 100%;
  background-color: var(--colorPrimary) !important;
}

.header-right {
  display: flex;
  justify-content: flex-end;
  align-items: center;
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