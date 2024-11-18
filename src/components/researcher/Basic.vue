<script setup lang="ts">

import {VCSType2Icon} from "@/types/vcs.ts";
import {Researcher} from "@/types/researcher.ts";
import {createFromIconfontCN} from "@ant-design/icons-vue";
import {SocialType2Icon, SocialType2Text} from "@/types/social.ts";
import {ITType, ITType2Icon, ITType2Text} from "@/types/it.ts";
import Photo from "@/components/researcher/Photo.vue";
import Job from "@/components/researcher/Job.vue";
import Education from "@/components/researcher/Education.vue";

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
    <span v-if="researcher.nicknames[0] !== researcher.name">{{ researcher.nicknames[0] }}</span>
  </h2>
  <p style="white-space: pre-line">{{ researcher.introduction }}</p>
  <ul class="no-list-style" style="padding-left: 0;">
    <li>
      ID
      <ul class="no-list-style">
        <li v-for="nickname in researcher.nicknames">
          {{ nickname }}
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
      <icon-font :type="SocialType2Icon[i.type]"/>
      &nbsp;
      {{ SocialType2Text[i.type] }}
      &nbsp;
      <a :href="i.address" target="_blank">@{{ i.username }}</a>
    </li>
  </ul>
  <h3>IT account</h3>
  <ul class="no-list-style" style="padding-left: 0;">
    <li v-for="i in researcher.its">
      <icon-font :type="ITType2Icon[i.type]"/>
      &nbsp;
      {{ ITType2Text[i.type as ITType] }}
      &nbsp;
      <a :href="i.address" target="_blank">@{{ i.username }}</a>
    </li>
  </ul>
  <Job :jobs="researcher.jobs" :organizations="researcher.organizations"/>
  <Education :educations="researcher.educations" :organizations="researcher.organizations"/>

</template>

<style scoped>

</style>