<script setup lang="ts">
import TopNavBar from "@/layout/topNavBar/TopNavBar.vue";
import Footer2 from "./Footer2.vue";

import { useLayoutStore } from "@/hooks/useLayoutStore";
import ActionSheet from "@/views/ActionSheet.vue";
import Drawer3 from "./drawer/Drawer3.vue";
import { usePokemonItemStore } from "@/hooks/usePokemonItemStore";
import { watch } from "vue";
import { storeToRefs } from "pinia";
import { StopOverlayScroll } from "@/utils/function";
const layout = useLayoutStore();
const pokemonItem = usePokemonItemStore();


window.addEventListener("DOMContentLoaded", () => {
  let displayMode = "browser tab";
  if (window.matchMedia("(display-mode: standalone)").matches) {
    displayMode = "standalone";
    layout.isPwa = true;
  } else if ((displayMode = "browser tab")) {
    layout.isPwa = false;
  }
  // Log launch display mode to analytics
  console.log("DISPLAY_MODE_LAUNCH:", displayMode);
});



</script>

<template>
  <v-layout class="rounded rounded-md">
    <Drawer3 v-if="!layout.isPwa" />

    <!-- ActionSheet -->
    <ActionSheet />

    <TopNavBar />
    <!-- <TopNavBar v-if="layout.isPwa || isMobile" /> -->

    <v-main>
      <router-view></router-view>
    </v-main>
    <!-- <v-main :style="layout.isPwa ||
      layout.isOpenSearchDrawer
      ? `height: 100vh; overflow: hidden;`
      : ''
      ">
      <router-view></router-view>
    </v-main> -->

    <!-- <Footer /> -->
    <!-- <SpeedDial /> -->
    <Footer2 v-if="layout.isPwa" />
  </v-layout>
</template>
