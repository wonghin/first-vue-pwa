<script setup lang="ts">
import { useDisplay } from "vuetify";
import Drawer2 from "../layout/drawer/Drawer2.vue";
import Drawer1 from "@/layout/drawer/Drawer1.vue";
import TopNavBar from "@/layout/topNavBar/TopNavBar.vue";
import Footer from "./Footer.vue";
import Footer2 from "./Footer2.vue";

import ActionSheet from "@/views/ActionSheet.vue";
import Container from "@/components/viewContainer/Container.vue";

const { sm, xs, md } = useDisplay();
</script>

<template>
  <v-layout class="rounded rounded-md">
    <!-- <Drawer2 /> -->

    <!-- ActionSheet -->
    <ActionSheet />

    <TopNavBar />

    <v-main class="overflow-hidden" style="height: 100vh">
      <router-view></router-view>
    </v-main>

    <!-- <Footer /> -->
    <Footer2 />
  </v-layout>
</template>
