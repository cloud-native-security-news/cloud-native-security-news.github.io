<script setup lang="ts">

import {VCSType2Icon} from "@/types/vcs.ts";
import {Researcher} from "@/types/researcher.ts";
import {createFromIconfontCN, TwitterOutlined} from "@ant-design/icons-vue";
import {Type} from "@/types/social.ts";
import {ITType, ITTypeName} from "@/types/it.ts";
import Photo from "@/components/researcher/Photo.vue";

defineProps<{
  researcher: Researcher
}>();

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_4554041_aw1uc7r1ue.js',
});
</script>

<template>
  <Photo :photos="researcher.photos"/>
<!--  <img :src="researcher.photo_url" alt="photo" width="100%"/>-->

  <h1> {{ researcher.name }}</h1>
  <h2 v-if="researcher.nicknames && researcher.nicknames.length > 0">
    {{ researcher.nicknames[0].nickname }}
  </h2>
  <p>{{ researcher.introduction }}</p>
  <ul class="no-list-style" style="padding-left: 0;">
    <li>
      ID
      <ul class="no-list-style">
        <li v-for="i in researcher.nicknames">
          {{ i.nickname }}
        </li>
      </ul>
    </li>
    <li>
      Organization
      <ul class="no-list-style">
        <li v-for="i in researcher.organizations">
          {{ i.name }}
        </li>
      </ul>
    </li>
    <li>
      Email
      <ul class="no-list-style">
        <li v-for="i in researcher.emails">
          {{ i.email }}
        </li>
      </ul>
    </li>
    <li>Website
      <ul class="no-list-style">
        <li v-for="i in researcher.websites">
          <a :href="i.address" target="_blank">{{ i.name }}</a>
        </li>
      </ul>
    </li>
  </ul>
  <h3>VCS</h3>
  <ul class="no-list-style" style="padding-left: 0;">
    <li v-for="i in researcher.VCSs">
      <Component :is="VCSType2Icon[i.type]"/>
      <a :href="i.address" target="_blank">@{{ i.username }}</a>
    </li>
  </ul>
  <h3>Social Media</h3>
  <ul class="no-list-style" style="padding-left: 0;">
    <li v-for="i in researcher.socials">
      <TwitterOutlined v-if="i.type === Type.Twitter"/>
      <icon-font v-else-if="i.type === Type.ResearchGate" type="icon-researchgate"/>
      <a :href="i.address" target="_blank">@{{ i.username }}</a>
    </li>
  </ul>
  <h3>IT account</h3>
  <ul class="no-list-style" style="padding-left: 0;">
    <li v-for="i in researcher.its">
      {{ITTypeName[i.type as ITType]}}
      <a :href="i.address" target="_blank">@{{ i.username }}</a>
    </li>
  </ul>
</template>

<style scoped>

</style>