<script lang="ts" setup>
import { reactive } from "vue";
import LogoutButton from "./LogoutButton.vue";
import SettingButton from "./SettingButton.vue";
import { useLayoutStore } from "@/hooks/useLayoutStore";
import { computed } from "vue";
import SettingView from "@/views/setting/SettingView.vue";
import ViewStyleButton from "./ViewStyleButton.vue";

const array = reactive({
  items: [{ title: "Click Me" }, { title: "Click Me" }, { title: "Click Me" }],
});

import { isMobile } from "mobile-device-detect";
</script>
<template>
  <v-menu location="bottom">
    <template v-slot:activator="{ props }">
      <v-btn icon v-bind="props">
        <i class="material-icons more_vert"></i>
      </v-btn>
    </template>

    <v-list>
      <!-- <v-list-item v-for="(item, index) in array.items" :key="index" :value="index">
        <v-list-item-title icon>{{ item.title }}</v-list-item-title>
      </v-list-item> -->
      <v-list-item value="viewStyle" v-if="isMobile">
        <ViewStyleButton />
      </v-list-item>
      <v-list-item value="setting">
        <SettingButton />
      </v-list-item>
      <v-list-item value="logout">
        <LogoutButton :isShowIcon="true" />
      </v-list-item>
    </v-list>
  </v-menu>
</template>
