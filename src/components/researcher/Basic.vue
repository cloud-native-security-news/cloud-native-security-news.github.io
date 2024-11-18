<script setup lang="ts">

import {VCSType2Icon} from "@/types/vcs.ts";
import {Researcher} from "@/types/researcher.ts";
import {createFromIconfontCN} from "@ant-design/icons-vue";
import {SocialType2Icon, SocialType2Text, Type} from "@/types/social.ts";
import {ITType, ITType2Text} from "@/types/it.ts";
import Photo from "@/components/researcher/Photo.vue";

defineProps<{
  researcher: Researcher
}>();

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_4554041_kvo63spa3i.js',
});
</script>

<template>
  <Photo :photos="researcher.photos"/>

  <h1> {{ researcher.name }}</h1>
  <h2 v-if="researcher.nicknames && researcher.nicknames.length > 0">
    {{ researcher.nicknames[0].nickname }}
  </h2>
  <p style="white-space: pre-line">{{ researcher.introduction }}</p>
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
        <li v-for="email in researcher.emails">
          {{ email }}
        </li>
      </ul>
    </li>
    <li v-if="researcher.websites.length > 0">
      Website
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
      {{ SocialType2Text[i.type] }}
      <icon-font v-if="i.type === Type.ResearchGate" type="icon-researchgate"/>
      <icon-font v-else-if="i.type === Type.Facebook" type="icon-facebook"/>
      <icon-font v-else-if="i.type === Type.Youtube" type="icon-youtube"/>
      <icon-font v-else-if="i.type === Type.LinkedIn" type="icon-linkedin"/>
      <Component v-else :is="SocialType2Icon[i.type]"/>
      <a :href="i.address" target="_blank">@{{ i.username }}</a>
    </li>
  </ul>
  <h3>IT account</h3>
  <ul class="no-list-style" style="padding-left: 0;">
    <li v-for="i in researcher.its">
      {{ ITType2Text[i.type as ITType] }}
      <icon-font v-if="i.type === ITType.SpeakerDeck" type="icon-speaker-deck"/>
      <a :href="i.address" target="_blank">@{{ i.username }}</a>
    </li>
  </ul>
  <Job :jobs="researcher.jobs" :organizations="researcher.organizations"/>
  <Education :educations="researcher.educations" :organizations="researcher.organizations"/>

</template>

<style scoped>

</style>